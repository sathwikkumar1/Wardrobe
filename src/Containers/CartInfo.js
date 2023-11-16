// CartTable.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../redux/actions/cartAction'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartInfo = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(updateCartItem({ ...item, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateCartItem({ ...item, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Card>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="50"
                    image={item.image}
                  />
                </Card>

              </TableCell>
              
              <TableCell className='fw-bold'>${item.price}</TableCell>
              <TableCell >
              <Button onClick={() => handleIncrement(item)}>+</Button>
              {item.quantity}
                <Button onClick={() => handleDecrement(item)}>-</Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleRemoveFromCart(item)}>
                  <DeleteIcon></DeleteIcon>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartInfo;
