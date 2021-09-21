import React from 'react';

const CollageListFilter: React.FC<{ count: number; title?: string }> = ({ title = 'Collages' }) => {
  return (
    <section className="interior-design-section sticky top-0 z-10 bg-white">
      <div className="container mx-auto px-4 pt-20 pb-6">
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
    </section>
  );
};

export default React.memo(CollageListFilter);
