import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../redux/actions/productAction';// Import your action creator

const SortBy = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('')

  const handleSortChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue)
    dispatch(setSortBy(selectedValue));
  };

  return (
    <div className='my-5 ms-5'>
      <h1 htmlFor="sortOptions">Sort By:</h1>
      <select id="sortOptions" onChange={handleSortChange}>
        <option value="#" key="">Select</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
};

export default SortBy;
