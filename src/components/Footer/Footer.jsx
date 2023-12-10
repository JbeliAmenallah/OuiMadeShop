import React ,{useState} from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'; // Make sure to import the Facebook icon
import { FaInstagram } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import ContactForm from '../../pages/Contactform';



const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='footer'>

    <Container>
      <Row>
        <Col lg='4'>
          <div className="logo">
            <div>
              <h1 className='text-white'> OuiMade</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
            Discover Timeless Elegance - Elevate Your Style with <strong>OuiMade</strong>.
            Embrace the beauty of every moment with our handpicked selection.
            Happy shopping!
          </p>

        </Col>
        <Col lg='2'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Social Media </h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 border-0 d-flex align-items-center gap-2'>
                <Link to='' className='link-on-hover'><FaFacebook style={{ marginRight: '8px', fontSize: '1.1em' }} />Facebook</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='' className='link-on-hover'><FaInstagram style={{ marginRight: '8px', fontSize: '1.1em' }} />Instagram</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='' className='link-on-hover'><FaFacebook style={{ marginRight: '8px', fontSize: '1.1em' }} />Tiktok</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/ContactForm' className='link-on-hover' >
                  <MdContactPhone style={{ marginRight: '8px', fontSize: '1.1em' }} />Contact Us
                </Link>
              </ListGroupItem>
           </ListGroup>
          </div>
        </Col>
        <Col lg='2'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title"> Usefull Links </h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/shop' className='link-on-hover'>Shop</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/cart' className='link-on-hover'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/login' className='link-on-hover'>Login </Link>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/signup' className='link-on-hover'>Sign Up</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title"><a href='https://maps.app.goo.gl/HeoMXTeB7S3K9cyv7' className='link-on-hover'>Business location </a></h4>
            <ListGroup >
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-1'>
                <iframe width="250" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=Ville%20Nouvelle%20Tunis,%20Tunisia+(OuiMade)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
          <p className="footer__copyright text-center mt-4 ">  Contact : <span> <i class="ri-phone-line"></i> </span> Jbeliamenallah@hotmail.com  </p>
          <p className="footer__copyright text-center mt-2"> Copyright   ©  {year} All rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer