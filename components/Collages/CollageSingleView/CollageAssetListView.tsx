import { AssetType } from '@components/Collages/AssetType';
import { onlyUnique } from '@utils/helpers';
import React, { useMemo } from 'react';
import CollageProductCard from './CollageProductCard';

const CollageAssetListView: React.FC<{ assets: Record<string, AssetType> }> = ({ assets }) => {
  const assetKeys = useMemo(() => {
    return Object.keys(assets)
      ?.filter(onlyUnique)
      .filter((key) => key !== 'price');
  }, [assets]);
  return (
    <div className="sticky top-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="border flex items-center justify-center heropattern-tinycheckers-red-50 rounded-2xl">
          <p className="text-xl mb-4 font-semibold text-center">
            Products featured <br /> in this set
          </p>
        </div>
        {assetKeys.map((assetId) => {
          const productData = assets[assetId];

          return <CollageProductCard productData={productData} key={assetId} />;
        })}
      </div>
    </div>
  );
};

export default CollageAssetListView;
