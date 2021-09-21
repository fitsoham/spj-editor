import BottomNav from '@components/Playground/BottomNav';
import Header from '@components/Playground/Header';
import MoreActions from '@components/Playground/MoreActions';
import NavPanel from '@components/Playground/NavPanel';
import SideNav from '@components/Playground/SideNav';
import BudgetCalculator from '@components/Shared/BudgetCalculator';
import ProductProps from '@components/Shared/ProductProps';
import fetcher from '@utils/fetcher';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import { DataBusContextProvider } from 'store';
import CollageListContextProvider from 'store/CollageList';
import { NavSelectContextProvider } from 'store/NavSelect';
import { PlaygroundAssetsContextProvider, PlaygroundAssetType } from 'store/PlaygroundAssets';
import { SelectedIdContextProvider } from 'store/SelectedId';
import { ViewingModeContextProvider } from 'store/ViewingModeContext';
const PlaygroundWithNoSSR = dynamic(() => import('@components/Playground'), { ssr: false });

interface PlaygroundProps {
  collageData: PlaygroundAssetType;
}

const VisualBoard: React.FC<PlaygroundProps> = ({ collageData }) => {
  const PlaygroundWrapperRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState([0, 0]);
  const updateSize = () =>
    setSize([PlaygroundWrapperRef.current.offsetWidth, PlaygroundWrapperRef.current.offsetHeight]);

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <ViewingModeContextProvider>
      <NavSelectContextProvider>
        <SelectedIdContextProvider>
          <PlaygroundAssetsContextProvider>
            <DataBusContextProvider>
              <CollageListContextProvider>
                <div className="h-screen">
                  <Header roomTypeTitle="Living Room" />
                  <div className="flex">
                    <div className="flex-shrink-0 w-16 bg-white diy-h-free">
                      <SideNav />
                    </div>
                    <div className="relative flex-shrink-0 w-72 2xl:w-80 bg-gray-200 overflow-y-scroll diy-h-free">
                      <NavPanel />
                    </div>
                    <div className="bg-gray-100 diy-h-free w-3/4 py-4 pl-4 flex flex-col space-y-4">
                      <div className="flex space-x-4 items-center">
                        <div className="bg-white shadow-sm px-4 rounded-sm h-14 flex items-center w-60">
                          <BudgetCalculator />
                        </div>
                        <div className="bg-white shadow-sm px-4 rounded-sm h-14 flex items-center flex-1">
                          <ProductProps />
                        </div>
                      </div>
                      <div className="bg-white shadow-sm h-full flex-1 rounded-sm" ref={PlaygroundWrapperRef}>
                        <PlaygroundWithNoSSR w={size[0]} h={size[1]} collageData={collageData} />
                      </div>
                      <BottomNav />
                    </div>
                    <MoreActions />
                  </div>
                </div>
              </CollageListContextProvider>
            </DataBusContextProvider>
          </PlaygroundAssetsContextProvider>
        </SelectedIdContextProvider>
      </NavSelectContextProvider>
    </ViewingModeContextProvider>
  );
};

export default React.memo(VisualBoard);

export const getStaticPaths = async () => {
  const { data } = await fetcher({
    endPoint: '/v1/collages?skip=0&limit=100&isActive=true',
    method: 'GET',
  });
  return {
    paths: data?.data?.map((collage) => ({ params: { cid: [collage?._id] } })),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const { cid = [] } = params;
  const [collageId = '', mode = ''] = cid || {};
  try {
    const collageRes = await fetcher({
      endPoint: `/v1/collages/${collageId}`,
      method: 'GET',
    });
    const { data = {}, statusCode } = collageRes;
    console.log('data is -----', data, statusCode);
    if (statusCode <= 301) {
      const collageProductIds = data?.meta?.view?.map((product) => product?.product);
      const productRes = await fetcher({
        endPoint: '/v1/assets/getAssetsDetail',
        body: {
          assets: [...collageProductIds],
          fields: ['price', 'name', 'renderImages', 'retailer', 'dimension', 'meta'],
        },
        method: 'POST',
      });
      const { data: productData = {}, statusCode: status } = productRes;
      const isError = status < 300 ? false : true;
      if (isError) throw new Error();
      const collageDataWithProductData = {
        type: 'collage',
        id: collageId,
        data: data?.meta?.view.map((object) => {
          const {
            translation: {
              x: { $numberDecimal: xCoord } = { $numberDecimal: '' },
              y: { $numberDecimal: yCoord } = { $numberDecimal: '' },
            } = {},
            scale: {
              height: { $numberDecimal: heightCoord = '' },
              width: { $numberDecimal: widthCoord = '' },
            },
            playgroundScale: {
              height: { $numberDecimal: actualHeightCoord = '' } = {},
              width: { $numberDecimal: actualWidthCoord = '' } = {},
            } = {},
            rotation = '0',
            imgSrc,
          } = object;
          return {
            x: parseFloat(xCoord),
            y: parseFloat(yCoord),
            height: parseFloat(heightCoord),
            width: parseFloat(widthCoord),
            assetId: object?.product,
            rotationValue: rotation,
            stitchedAssetImage: imgSrc,
            count: 12,
            ...(actualWidthCoord && { playgroundWidth: parseFloat(actualWidthCoord) }),
            ...(actualHeightCoord && { playgroundHeight: parseFloat(actualHeightCoord) }),
            id: `in-playground-asset-${Math.random()}`,
            price: !isError ? productData[object?.product]?.price || 0 : 0,
            displayPrice: !isError ? productData[object?.product]?.price || 0 : 0,
            retailer: !isError ? productData[object?.product]?.retailer?.name || '' : '',
            renderImages: !isError ? productData[object?.product]?.renderImages || [{ cdn: '' }] : [{ cdn: '' }],
            name: !isError ? productData[object?.product]?.name || '' : '',
            depth: !isError ? productData[object?.product]?.dimension?.depth || 0 : 0,
            vertical: !isError ? productData[object?.product]?.meta?.vertical?.name || '' : '',
          };
        }),
      };
      return {
        props: {
          collageData: collageDataWithProductData,
          mode,
        },
        revalidate: 1, //TODO: Recheck the doc Data Fetching
      };
    } else {
      throw new Error(statusCode);
    }
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
