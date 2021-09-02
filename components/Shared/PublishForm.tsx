import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { publicRoutes } from '@utils/constants/api';
import fetcher from '@utils/fetcher';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';


const ListBox = ({data, onChange}) => {
  const [selected, setSelected] = useState({});

  useEffect(() => { 
    if (data && data?.length) { 
      setSelected(data[0]);
      if (data[0]?.id) { 
        onChange({_id: data[0]?.id});
      }
    }
  }, [data])
  return (
    <div className="w-72 top-16">
      <Listbox value={selected} onChange={(value) => {onChange(value); setSelected(value);}}>
        <div className="relative mt-1">
          <Listbox.Button className={`relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm ${selected?.disabled ? 'text-gray-500': ''}`}>
            <span className="block truncate capitalize">{selected?.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {data.map((item, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-gray-100' : 'text-gray-900'}
                          cursor-pointer select-none relative py-2 pl-10 pr-4 capitalize ${item?.disabled ? 'bg-gray-200 text-gray-500' : ''}`
                  }
                  value={item}
                  disabled={item?.disabled || false}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {item.name}
                      </span>
                      {selected && (!item?.disabled || false) ? (
                        <span
                          className={`${
                            active ? 'text-amber-600' : 'text-amber-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

const PublishForm = () => {

    const [categoryData, setCategoryData] = useState([{_id: 1, name: 'Choose a Category', disabled: true}]);
    const [subCategoryData, setSubCategoryData] = useState([]);
    const { selectedCategoryId,
      setSelectedCategoryId, 
      selectedSubCategoryId,
      setSelectedSubCategoryId, isCollageActive, setCollageActiveStatus } = useContext(PlaygroundAssetsContext);
    
    const onCategoryChangeCallback = (value) => { 
      const {_id: categoryId} = value;
      setSelectedCategoryId(categoryId);
    }
    const onSubCategoryChangeCallback = (value) => { 
      const {_id: categoryId} = value;
      console.log('value---', value);
      setSelectedSubCategoryId(categoryId);
    }

    useEffect(() => {
      if (selectedCategoryId && selectedCategoryId?.length) {
        
        (async () => { 
          const subCategoryRes = await fetcher({endPoint: `${publicRoutes?.collageCategoryRoute}/${selectedCategoryId}/subCategories`, method: 'GET'});
          const {data, statusCode} = subCategoryRes;
          console.log(subCategoryRes);
          if (statusCode < 301) { 
            const subCategories = data.map((item) => {return {...item, name: item?.subCategory?.name}})
            setSubCategoryData(subCategories);
          }
        })();
      }
    }, [selectedCategoryId])
    
    useEffect(() => {
      (async () => { 
        const categoryRes = await fetcher({endPoint: publicRoutes?.collageCategoryRoute, method: 'GET'});
        const {data, statusCode} = categoryRes;
        if (statusCode < 301) {
          const categoryDataView = data.map((item) => {return {...item, selected: false}});
          setCategoryData([...categoryData, ...categoryDataView]);
        }
      })()
    }, [])

    const publishCollage = () =>{
      console.log(`saving collage`);
    }

    const handleCheckboxChange = (e) =>{
      setCollageActiveStatus(e.target.checked);
    }

    return (
      <>
        <ToastContainer />
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2>Select a Room Type</h2>
            <ListBox data={categoryData} onChange={onCategoryChangeCallback}/>
          </div>
          <div className="text-red">
            <h2>Select a Room Sections</h2>
            <ListBox data={subCategoryData} onChange={onSubCategoryChangeCallback}/>
          </div>
          <div className="flex align-center justify-between items-center">
            <div>
              <input
                type="checkbox"
                className="form-checkbox rounded text-red-100 ml-1 border-gray-400 checked:border-gray-400 hover:checked:border-gray-400 focus:checked:border-gray-400 box-content border border-transparent hover:shadow-xl hover:border-gray-200 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                checked={isCollageActive}
                onChange={handleCheckboxChange}
                id="active-filter"
              />
              <span className="pl-2">Active</span>
            </div>
            
            <button
              type="button"
              className=" inline-flex ml-2 justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={publishCollage}
            >
              Publish
            </button>
          </div>
        </div>
        
      </>
    )
}




export default PublishForm;