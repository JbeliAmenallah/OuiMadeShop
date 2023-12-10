import React from 'react'
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import { useDispatch } from 'react-redux';

import {cartActions} from '../../redux/slices/cartSlice'
const ProductCard = ({item}) => {




    const dispatch = useDispatch ()

    const addToCart = () =>{
        dispatch (cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price : item.price,
            imgUrl:item.imgUrl
        }
        ));

        toast.success('Product is added Succesfully')
    }
    return (
        <Col lg='3' md='4' className='mb-2'>
            <div className="product__item">
                <div className="product__img">
                    <img src={item.imgUrl} alt="" />
                </div>
                <div className='p-2 product__info'>
                <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                <span>{item.category}</span>
                </div>
                <div className="product__card-bottom d-flex aign-items-center justify-content-between p-2">
                    <span className="price"><s>100</s> <strong> {item.price}</strong> - DT</span>
                    <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
                        <i class="ri-add-line"></i>
                    </motion.span>
                </div>
            </div>
        </Col>

    )
}

export default ProductCard