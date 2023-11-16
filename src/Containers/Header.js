// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'; // Import the Cart component
import Badge from '@mui/material/Badge';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import SearchBar from './SearchBar';

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    
  const [showCartModal, setShowCartModal] = useState(false);
  let cartCount = cartItems.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);
  
  const handleCartIconClick = () => {
    setShowCartModal(true); 
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <div className='ui fixed menu py-3'>
      <div className='ui container fluid center d-flex justify-content-around align-items-center'>
        <Link to= '/'> <h2>Wardrobe</h2></Link>
        <h5>Clothing</h5>
        <h5>Accessories</h5>
        <h5>Electronics</h5>
        <h5>Jewelery</h5>

       
        <SearchBar></SearchBar>
        <Link to="#" onClick={handleCartIconClick}>
        <Badge badgeContent={cartCount} color="primary">
        <ShoppingBagRoundedIcon  sx={{ fontSize: 30 }}/>
    </Badge>
        </Link>
      </div>
      
      <Cart show={showCartModal} onHide={handleCloseCartModal} />
    </div>
  );
};

export default Header;
