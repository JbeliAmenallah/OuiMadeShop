import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products  from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import  {motion} from 'framer-motion'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import {toast} from "react-toastify"



const ProductDetails = () => {


  const {id}=useParams()
  const product = products.find(item=>item.id===id)
  const dispatch=useDispatch()
  const {imgUrl,productName,price,avgRating,description,category,shortDesc} = product

  const addToCart=()=>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,
    }))
    toast.success('Product been added Sucessfully')
  }
    const relatedProducts=products.filter(item=>item.category===category)
  return (<Helmet title={productName}>
    <CommonSection title={productName}/>
      <section className='pt-5'> 
      <Container className='mt-4'>
        <Row>
          <Col lg='6'>
          <img src={imgUrl} alt="" style={{ width: '70%', marginLeft: '-20px' }} />          </Col>
          <Col lg='6'>
            <div className="product__details" >
              <h2>{productName}</h2>
              <div className="product__rating  d-flex align-items-center gap-5 mb-4 ">
                <div>
                  <span>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  </span>
                </div>
                <p>(<span>{avgRating}</span> ratings)</p>
              </div>
              <span className='product__price'>{price} - DT </span>
              <span className='category__detail'> Category : {category} </span>
              <p className='short-description mt-4'>{shortDesc}</p>
              <motion.button whileTap={{scale:1.2}}className="buy__btn" onClick={addToCart}>
                Add to cart
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    <section className="crystal-bags-section pt-5">
      <Container>
        <Row>
          <Col lg='12'>
            <h2>Crystal Bags Collection</h2>
            <p className="crystal-bags-description">
              Explore our exquisite collection of crystal bags. Each bag is carefully crafted
              with high-quality materials to bring a touch of elegance and style to your
              fashion ensemble. Discover the beauty of crystals and indulge in the luxury of
              our unique crystal bags. Elevate your fashion statement with these stunning accessories.
            </p>
          </Col>
          <Col lg='12' className='mt-5'>
            <h2 className="related__title related__title mb-5 pt-4">You Might Like This </h2>
            </Col>
            <ProductsList data={relatedProducts}/>
          
        </Row>
      </Container>
    </section>
  </Helmet>)
}

export default ProductDetails