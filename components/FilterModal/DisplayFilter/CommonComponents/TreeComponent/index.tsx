import { MetaTreeMap } from '@components/FilterModal/FilterContext/types/MetadataType';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const TreeComponent: React.FC<{
  data: MetaTreeMap[];
  grid?: boolean;
  onClick?: ({ key, value }: { key: string; value: string; removeList?: string[] }) => void;
}> = ({
  data,
  onClick = () => {
    return;
  },
  grid,
}) => {
  return (
    <div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`}>
        {data?.map((entry) => {
          return (
            <Disclosure key={entry?.key}>
              {({ open }) => {
                return (
                  <>
                    <Disclosure.Button
                      className={`block  ${grid || !entry?.children ? 'col-span-1' : 'col-span-full'} truncate`}
                    >
                      <button
                        className="p-1 pl-0 flex items-center space-x-2 w-full"
                        onClick={() =>
                          onClick({
                            key: entry?.type,
                            value: entry?.name,
                            removeList: entry?.removeList,
                          })
                        }
                      >
                        {entry?.children ? (
                          <ChevronDownIcon className={`w-4 h-4 ${open && 'rotate-180'}`} />
                        ) : (
                          <input
                            type="checkbox"
                            className="form-checkbox rounded text-red-100 border border-gray-400 checked:border-gray-400 hover:checked:border-gray-400 focus:checked:border-gray-400 box-content border border-transparent hover:shadow-xl hover:border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                            checked={entry?.selected}
                            readOnly
                          />
                        )}

                        <div
                          className={`truncate text-sm capitalize ${
                            entry?.selected ? 'text-red-500' : 'text-gray-900'
                          }`}
                        >
                          {entry?.name}
                        </div>
                      </button>
                    </Disclosure.Button>
                    {entry?.children && (
                      <Disclosure.Panel className="col-span-full" static>
                        <div className="px-4">
                          {entry?.children && entry?.selected && (
                            <TreeComponent data={entry?.children} grid={!entry?.children} onClick={onClick} />
                          )}
                        </div>
                      </Disclosure.Panel>
                    )}
                  </>
                );
              }}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default TreeComponent;
