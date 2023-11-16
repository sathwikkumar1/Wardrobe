import React ,{useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { fetchProducts, setProducts } from '../redux/actions/productAction';
import CategoryFilter from './CategoryFilter';
import SortBy from './SortBy';

const ProductListing = () => {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();

    //  const fetchProducts = async () =>{
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     .catch((err)=>{
    //         console.log('Err'+err)
    //     })
    //   dispatch(setProducts(response.data))
    //  }
    useEffect(()=>{   
        // fetchProducts()
        dispatch(fetchProducts())
    },[])
    console.log(products)
    return (
        <div className=' d-flex mt-5'>
            {/* <h1>Product Listing</h1> */}
            <div >
            <CategoryFilter />
            
            <SortBy></SortBy>
            </div>
            
            <div className='ui container grid'>
            <ProductComponent />
            </div>
        </div>
    );
};

export default ProductListing;