import React, { useContext, useEffect, useState } from 'react';
import { SelectedIdContext } from 'store/SelectedId';

const Index = ({ value, updateProductRotation }) => {
  const [rangeValue, setRangeValue] = useState('0');
  const [selectedId] = useContext(SelectedIdContext);

  useEffect(() => {
    setRangeValue(value);
  }, [value]);

  const rangeValChange = (value) => {
    updateProductRotation(selectedId, value);
    setRangeValue(value);
  };
  return (
    <>
      <input
        className="rounded appearance-none bg-gray-300 h-1 w-48"
        type="range"
        onChange={(e) => rangeValChange(e?.target?.value)}
        value={rangeValue}
        step="8"
      />
    </>
  );
};

export default Index;
