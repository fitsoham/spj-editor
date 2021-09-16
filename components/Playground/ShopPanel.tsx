import EmptyState from '@components/Shared/EmptyState';
import React, { useContext, useEffect, useState } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';
import ProductCard from './ProductCard';

const StorePanel: React.FC = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const {
    PlaygroundAssets,
  } = useContext(PlaygroundAssetsContext);
  useEffect(() => { 
    // flatten out products list
    if (PlaygroundAssets?.length) {
      const formatted = PlaygroundAssets.map((item) => { 
        if (item?.type === 'collage') { 
          return item?.data;
        }
        return {...item}
      })
      const mergedArray = [].concat(...formatted).map((product) => { 
        return {
          ...product,
          _id: product?.assetId,
        }
      });
      // remove duplicates
      const filtered = mergedArray.filter((v,i,a)=>a.findIndex(t=>(t._id === v._id))===i)
      setShoppingList(filtered);
    } else {
      setShoppingList([]);
    }
  }, [PlaygroundAssets])

  if (!shoppingList?.length) {
    return (

      <div className="h-full shop-panel">
        <div className="relative h-16 py-4 px-4 flex justify-between items-center z-10 mb-16">
          <p className="text-gray-900">Your Shopping List</p>
        </div>
        <EmptyState title="Your Shopping Cart is Empty." message="Drag products from our store into the playground to see magic happen!" />
      </div>
      
    )
  }


  return (
    <div className="shop-panel">
      <div className="relative h-16 py-4 px-4 flex justify-between items-center z-10">
        <p className="text-gray-900">Your Shopping List</p>
      </div>
      <div className="grid grid-cols-2 gap-1 px-1">
      {
          shoppingList.map((item) => {
            return (
              <div key={item?.id} className="h-full bg-white pb-2">
                <ProductCard product={item} isDraggable={false}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default StorePanel;
