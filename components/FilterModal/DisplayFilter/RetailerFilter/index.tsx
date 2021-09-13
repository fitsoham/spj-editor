import { useFilterContext } from '@components/FilterModal/FilterContext';
import { Tab } from '@headlessui/react';
import React, { useMemo, useState } from 'react';
import TreeComponent from '../../components/TreeComponent';

const filterRegex = {
  Popular: /^[tTpPwW]/,
  'A-D': /^[a-dA-D]/,
  'E-H': /^[e-hE-H]/,
  'I-L': /^[i-lI-L]/,
  'M-P': /^[m-pM-P]/,
  'Q-T': /^[q-tQ-T]/,
  'U-Z': /^[u-zU-Z]/,
};

const RetailerFilter: React.FC = () => {
  const [regexToMatch, setRegexToMatch] = useState(filterRegex.Popular);

  const onTabChange = (index: number) => {
    const entries = Object.entries(filterRegex);

    setRegexToMatch(entries[index][1]);
  };

  const {
    retailerMap,
    assetStore: { filter, changeFilter },
  } = useFilterContext();

  const filteredRetailerMap = useMemo(() => {
    return retailerMap.filter((retailer) => regexToMatch.test(retailer.name));
  }, [retailerMap, regexToMatch]);

  const onClick = ({ key, value }: { key: string; value: string }) => {
    let changedValue = filter[key];
    if (typeof changedValue === 'object') {
      if (changedValue.includes(value)) {
        changedValue = changedValue.filter((entry) => entry !== value);
      } else changedValue = [...changedValue, value];
    } else {
      changedValue = value;
    }
    changeFilter({
      [key]: changedValue,
    });
  };

  return (
    <div className="gap-4 flex flex-col relative flex-grow">
      <div className="sticky top-3">
        <Tab.Group onChange={onTabChange}>
          <Tab.List className="w-full bg-white flex p-2 rounded-full text-sm gap-2 overflow-x-auto ">
            {Object.entries(filterRegex).map(([label]) => (
              <Tab key={label}>
                {({ selected }) => (
                  <div
                    className={`rounded-full border border-gray-400 py-0.5 px-4 ${
                      selected ? 'bg-white text-red-500' : ''
                    }`}
                  >
                    {label}
                  </div>
                )}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
      <div>
        <TreeComponent grid={true} data={filteredRetailerMap} onClick={onClick} />
      </div>
    </div>
  );
};

export default RetailerFilter;
