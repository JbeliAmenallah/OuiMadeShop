import React from 'react';
import "../styles/Cart.css";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title='Cart'>
      <CommonSection title='Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>No items added to cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image </th>
                      <th>Title </th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3'>
              <div className="btn__cart">
                <h6 className='d-flex align-item-center justify-content-between'>Subtotal : <span className='fs-4 bold'>{totalAmount} DT</span>
                </h6>
                <p className='fs-6 mt-2'>Taxes In checkout with details</p>
                <div>
                  <button className='buy__btn w-100 mt-3'><Link to='/checkout'>Check Bills</Link></button>
                  <button className='buy__btn w-100 mt-3'><Link to='/shop'>Continue Shopping</Link></button>
                </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName} </td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.button whileTap={{ scale: 1.2 }} className="delete-button" onClick={handleDelete}>
          Delete
        </motion.button>
      </td>
    </tr>
  );
};

export default Cart;
