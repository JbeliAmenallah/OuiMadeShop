import React,{useState} from 'react';
import "../styles/checkout.css"
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PaymentForm from '../pages/PaymentForm'
import {db} from '../firebase.config'


const Checkout = () => {

  const [isPaymentFormOpen, setPaymentFormOpen] = useState(false);

  const togglePaymentForm = () => {
    setPaymentFormOpen(!isPaymentFormOpen);
  };
  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  
  return <Helmet title="checkout">
    <CommonSection title='checkout' />
    <Container className='check__stuff'>
      <Row>
        <Col lg='8'>
          <h6 className='mb-2 mt-5 fw-bold'>Billing Information</h6>
          <Form className='billing__form'>
            <FormGroup className="form__group mb-3">

              <input type="text" className="form-control" id="name" placeholder='Enter Name' required />
            </FormGroup>
            <FormGroup className=" form__group mb-3">

              <input type="email" className="form-control" id="email" placeholder='Enter Email' required />
            </FormGroup>
            <FormGroup className="form__group mb-3">

              <input type="text" className="form-control" id="streetAddress" placeholder='Street Address' required />
            </FormGroup>
            <FormGroup className="form__group mb-3">

              <input type="text" className="form-control" id="postalCode" placeholder='Postal Code' required />
            </FormGroup>
            <FormGroup className="form__group mb-3">

              <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
            </FormGroup>
          </Form>
        </Col>
        <Col lg='4'>
          <div className="checkout__cart">
            <h6>Total Quantity : <span>{totalQty} items </span></h6>
            <h6>Subtotal : <span> {totalAmount}<span> dt</span> </span></h6>
            <h6>Shipping : <span>0 <span> dt</span> </span></h6>
            <h4>Total Cost  : <span> {totalAmount} <span> dt</span>  </span></h4>
            <PaymentForm/>
            {isPaymentFormOpen && <PaymentForm closeModal={togglePaymentForm} />}
          </div>
        </Col>
      </Row>
    </Container>
  </Helmet>
}

export default Checkout