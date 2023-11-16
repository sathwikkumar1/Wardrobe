import React, { useEffect , useState } from 'react';

import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts  } from '../redux/actions/productAction';
import { removeSelectedProducts , fetchProduct } from '../redux/actions/productAction';
import { addToCart } from '../redux/actions/cartAction';
import Cart from './Cart';

const ProductDetails = () => {
    const [showCartModal, setShowCartModal] = useState(false);
    const {id} = useParams()
    const product = useSelector((state)=>state.product)
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));
      };
    // const fetchProductDetail = async () =>{
    //     const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    //     .catch((err)=> {
    //         console.log('ERR' + err)
    //     })
    //     dispatch(selectedProducts(response.data))
    // }  
    
    useEffect(()=>{
        if(id&&id!=='')
        // fetchProductDetail()
    dispatch(fetchProduct(id))
    return () => {
        dispatch(removeSelectedProducts())
    }
    },[id])

    const handleCartIconClick = () => {
        setShowCartModal(true); 
      };
    
      const handleCloseCartModal = () => {
        setShowCartModal(false);
      };
    const { title, image, price, category,description } = product;
    return (
        <div>
             {/* <h1>Product Details</h1> */}
             <div className="ui grid container" style={{marginTop:'100px'}}>
                {Object.keys(product).length === 0 ? (
                    <div>......Loading</div>
                ):(
                    <div className="ui segment">
                        <div className="ui two column stackable center aligned grid">
                            {/* <div className="ui vertical divider">AND</div> */}
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img src={image} alt="" className="ui fluid image" style={{width:'500px', height:'500px'}} />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <a href="" className="ui teal tag label">${price}</a>
                                    </h2>
                                    <h3 className="ui brown block header">{category}</h3>
                                    <p>{description}</p>
                                    <Link to="#" onClick={handleCartIconClick}>
                                    <div className="ui vertical animated button" tabIndex='0' onClick={() => handleAddToCart(product)}>
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content" >Add To Cart</div>
                                    </div>
                                   </Link>
                                   <Cart show={showCartModal} onHide={handleCloseCartModal} />
                                </div>
                            </div>
                        </div>
                    </div>

                )}
               
             </div>
             <Link to="#" onClick={() => window.history.go(-1)} style={{ display: 'block' }}>
                Go Back
            </Link>
        </div>
    );
};

export default ProductDetails;