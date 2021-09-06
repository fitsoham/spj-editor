import MultiSelect from '@components/Shared/MultiSelect';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { publicRoutes } from '@utils/constants/api';
import { trigger } from '@utils/events';
import fetcher from '@utils/fetcher';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';


const defaultCategoryData = [{_id: '1', name: 'Choose a Category', disabled: true}];
const defaultSubCategoryData = [{_id: '1', name: 'Please select a room type', disabled: true}];

interface ListInterface { 
  onChange: ({_id: string}) => void;
  data: Array<{_id: string, disabled?: boolean, name: string;}>
}

interface BoxData {
  name: string;
  _id: string;
  disabled?: boolean;
}

const ListBox: React.FC<ListInterface> = ({data, onChange}) => {
  const [selected, setSelected] = useState<BoxData>({name: '', _id: ''});

  useEffect(() => { 
    if (data && data?.length) { 
      setSelected(data[0]);
      if (data[0]?._id && data[0]?._id !== '1') { 
        onChange({_id: data[0]?._id});
      }
    }
  }, [data])
  return (
    <div className="w-72 top-16">
      <Listbox value={selected} onChange={(value) => { setSelected(value); onChange({...value})}}>
        <div className="relative mt-1">
          <Listbox.Button className={`relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border border-gray-300 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm ${selected?.disabled ? 'text-gray-500': ''}`}>
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

const PublishForm: React.FC = () => {

    const [categoryData, setCategoryData] = useState(defaultCategoryData);
    const [subCategoryData, setSubCategoryData] = useState(defaultSubCategoryData);
    const { selectedCategoryId,
      setSelectedCategoryId, 
      selectedSubCategoryId,
      setSelectedSubCategoryId, isCollageActive, setCollageActiveStatus } = useContext(PlaygroundAssetsContext);
    
    const onCategoryChangeCallback = (value) => { 
      const {_id: categoryId} = value;
      setSelectedCategoryId(categoryId);
    }
    const onSubCategoryChangeCallback = (value) => { 
      const {_id: subCategoryId} = value;
      setSelectedSubCategoryId(subCategoryId);
    }

    useEffect(() => {
      if (selectedCategoryId && selectedCategoryId?.length) {
        
        (async () => { 
          const subCategoryRes = await fetcher({endPoint: `${publicRoutes?.collageCategoryRoute}/${selectedCategoryId}/subCategories`, method: 'GET'});
          const {data, statusCode} = subCategoryRes;
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
          setCategoryData([...defaultCategoryData, ...categoryDataView]);
        }
      })()
    }, [])

    useEffect(() => { 
      return () => { 
        setCategoryData(defaultCategoryData);
        setSubCategoryData(defaultSubCategoryData);
        setSelectedCategoryId('');
        setSelectedSubCategoryId('');
      }
    }, [])
    

    

    const handleCheckboxChange = (e) =>{
      setCollageActiveStatus(e.target.checked);
    }
    
    const isButtonDisabled = !(selectedSubCategoryId && selectedCategoryId?.length);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const getSuggestions = async (val) => { 
      const res = await fetcher({endPoint: `/tags?name=${val}`, method: 'GET'});
      const {data, statusCode} = res;
      if (statusCode < 300) {
        setTags(data?.tags.map(item => item?.name));
      }
    }

    const [themeSuggestions, setThemeSuggestions]= useState([]);
    const [selectedThemes, setSelectedThemes] = useState([])
    const getThemeSuggestions = async (val) => { 
      const res = await fetcher({endPoint: `/v1/themes/suggestions?name=${val}`, method: 'GET'});
      const {data, statusCode} = res;
      if (statusCode < 300) {
        setThemeSuggestions(data?.map(item => item?.name));
      }
    }

    const updateSelections = (selectionArray) => { 
      setSelectedTags(selectionArray);
    }
    const updateThemeSelections = (selectionArray) => {
      setSelectedThemes(selectionArray);
    }

    const [collageName, setCollageName] = useState('');
    const [collageDescription, setCollageDescription] = useState('');

    const publishCollage = () =>{
      trigger('publish', {collageName, collageDescription, selectedThemes, selectedTags});
    }


    return (
      <>
        <ToastContainer />
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h2>Collage Name</h2>
            <input type="text" value={collageName} onChange={(e) => setCollageName(e?.target?.value)}/>
          </div>
          <div>
            <h2>Select a Room Type</h2>
            <ListBox data={categoryData} onChange={onCategoryChangeCallback}/>
          </div>
          <div className="text-red">
            <h2>Select a Room Sections</h2>
            <ListBox data={subCategoryData} onChange={onSubCategoryChangeCallback}/>
          </div>
          <div>
            <MultiSelect triggerSearch={getSuggestions} suggestions={tags} updateSelections={updateSelections} label="Tag your collage"/>
          </div>
          <div>
            <MultiSelect triggerSearch={getThemeSuggestions} suggestions={themeSuggestions} updateSelections={updateThemeSelections} label="Tag themes"/>
          </div>
          <div>
            <h2>Collage Description</h2>
            <textarea className="w-full" onChange={(e) => setCollageDescription(e?.target?.value)}>{collageDescription}</textarea>
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
              className={`inline-flex ml-2 justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${isButtonDisabled ? 'bg-gray-300': 'bg-black'}`}
              onClick={publishCollage}
              disabled={isButtonDisabled}
            >
              Publish
            </button>
          </div>
        </div>
        
      </>
    )
}




export default PublishForm;