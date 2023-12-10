import React from 'react'
import { motion } from 'framer-motion'
import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css';
import Services from '../services/Services';
import { Container, Row, Col } from 'reactstrap';
import hero from '../assets/images/hero.png'
import { Link } from 'react-router-dom';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products'
import { useEffect, useState } from 'react'
import counter from '../assets/images/prod2.png'
import Clock from '../components/UI/Clock';




const Home = () => {;
  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestSalesProducts,setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();
  useEffect(()=>{
    const filteredTrendingProducts = products.filter(
      (item) =>item.category=='Bag'
      );
    const filteredBestSalesProducts = products.filter(
        (item) =>item.category=='Bag'
        );
      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
  },[]);
  return <Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending Product in {year} </p>
              <h2> Accessorize your life with style </h2>
              <p>Explore style effortlessly with our curated accessories collection.
                Find the perfect finishing touch for any outfit, from timeless classics to trendy pieces.
                Let your accessories tell your unique story.
                Discover fashion that speaks volumes, one piece at a time.</p>
              <motion.button whileTap={{ scale: 1.2 }}
                className="buy__btn">
                <Link to='/shop'>Shop Now</Link>
              </motion.button>
            </div>
          </Col>
          <Col lang='6' md='6' >
            <div className="hero__img">
              <img src={hero} alt="heroimage" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>



    <Services />
        <section className="trending__products">
          <Container>
            <Row>
              <Col lg='12'className='text-center'>
                <h2 className="section__title" >
                  Latest Products
                </h2>
              </Col>
              <ProductsList data={trendingProducts}/>
            </Row>
          </Container>
        </section>
        <section className="best__sales">
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h2 className="section__title">Best Sales</h2>
              </Col>
              <ProductsList data={bestSalesProducts}/>
            </Row>
          </Container>
        </section>
        <section className="timer__count">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="clock__top-content">
                  <h5 className='text-white fs-7 mb-2'>Limited Offer</h5>
                  <h2 className='text-white fs-5 mb-3 nameprod'>Crystal Bag</h2>
                </div>
                <Clock/>
                <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn">
                    <Link to='/shop'> Browse Store </Link>
                  </motion.button>
              </Col>
               <Col lg="6" md="12" className='text-end counter__img' >
                <img src={counter} alt="" />
               </Col>
            </Row>
          </Container>
        </section>
        <section className="best__sales">
          <Container>
            <Row>
              <Col lg="12" className='text-center'>
                <h2 className="section__title">Best Sales</h2>
              </Col>
              <ProductsList data={bestSalesProducts}/>
            </Row>
          </Container>
        </section>
  </Helmet>
}

export default Home