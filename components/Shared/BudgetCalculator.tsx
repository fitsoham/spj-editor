import React, { useContext } from 'react';
import { PlaygroundAssetsContext } from 'store/PlaygroundAssets';


const BudgetCalculator: React.FC = () => { 
  const {playgroundTotal} = useContext(PlaygroundAssetsContext);
  return (
    <div className="bg-white shadow-sm p-4">
      <p className="text-sm text-gray-600">Budget: ${playgroundTotal.toFixed(2)}</p>
    </div>
  ) 
}

export default BudgetCalculator
