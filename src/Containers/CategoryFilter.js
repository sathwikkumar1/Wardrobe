import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, filterCategories } from '../redux/actions/productAction';

const CategoryFilter = () => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const dispatch = useDispatch()
    const categories = useSelector((state)=>state.categories.categories)

    useEffect(()=>{
        dispatch(fetchCategories())
    },[])

    const handleCategoryChange = (category)=>{
        if(selectedCategories.includes(category))
        {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else 
        {
            setSelectedCategories([...selectedCategories,category])
        }

    }
    const applyFilter = () => {
        dispatch(filterCategories(selectedCategories))
    }
    
    return (
        <div className='mt-5 ms-5'>
            <h1>Categories</h1>
            {categories.map((category)=>{
                return(<>
                      <label>
        <input
          type="checkbox"
          onChange={() => handleCategoryChange(category)}
          checked={selectedCategories.includes(category)}
        />
        {category}
      </label>
      <br />
</>)
            })}
            <button className='btn btn-primary' onClick={applyFilter}>Apply filter</button>
        </div>
        
    );
};

export default CategoryFilter;