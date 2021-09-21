import { colorList } from '@components/Playground/BgSelector';
import React from 'react';

const CollageListFilter: React.FC<{ count: number; title?: string; bg?: string; setBg?: React.Dispatch<string> }> = ({
  count,
  title = 'Collages',
  bg,
  setBg,
}) => {
  return (
    <section className="interior-design-section sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 pt-20 pb-2">
        <div className="flex items-end">
          <div className="flex-1">
            {/* {count && <p className="text-gray-500">{count}+ Collages</p>} */}
            <h2 className="mt-2 mb-2 text-3xl leading-8 font-bold tracking-tight capitalize text-gray-900">{title}</h2>
            {<p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur</p>}
          </div>
          {/* <div className="text-right flex-1">
            <Modal />
          </div> */}
        </div>
      </div>
      {setBg && count > 0 && (
        <div className="container mx-auto px-4 pb-4  mb-4">
          <div className="overflow-scroll flex gap-4">
            {colorList.map((item) => {
              return (
                <button
                  key={item?.id}
                  onClick={() => setBg(item?.colorHex)}
                  className={`border-transparent box-border rounded-full flex-shrink-0 w-8 h-8  last:mr-0 relative cursor-pointer border-2 border-gray-400 ${
                    bg === item?.colorHex ? 'border-black' : ''
                  } `}
                  style={{ backgroundColor: `${item?.colorHex}` }}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(CollageListFilter);
