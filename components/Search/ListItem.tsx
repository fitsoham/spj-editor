import Image from 'next/image';
import React from 'react';

interface ListItemInterface {
  item: {
    id: number;
    title: string;
    theme: string;
    thumbnail: string;
  };
  active: boolean;
  setSelected: ({ id: number, name: string }) => null;
  setHovered: ({ id: number, name: string }) => null;
  setSearchString: (string) => null;
}

const ListItem: React.FC<ListItemInterface> = ({ item, active, setSelected, setHovered, setSearchString }) => (
  <li
    className={`flex items-center space-x-2 lg:space-x-4 transition:background rounded-md cursor-pointer duration-200 mt-4 first:mt-0 ${
      active ? 'bg-gray-200' : 'bg-white'
    }`}
    onClick={() => {
      setSelected(item);
      setSearchString(item?.title);
    }}
    onMouseEnter={() => {
      setHovered(item);
    }}
    onMouseLeave={() => {
      setHovered(undefined);
    }}
  >
    <Image src={item.thumbnail} className="rounded-md" alt="" height={'60'} width={'60'} />
    <div className="">
      <h3 className="leading-5 overflow-ellipsis overflow-hidden">{item.title}</h3>
      <p className="text-gray-500 text-xs">{item.theme}</p>
    </div>
  </li>
);

export default ListItem;
