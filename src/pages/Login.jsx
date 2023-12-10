import React ,{useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col,Form,FormGroup,Input} from "reactstrap"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase.config'
import {toast} from 'react-toastify'
import LoadingSpinner from './LoadingSpinner'

import "../styles/login.css"
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Simulate a delay before navigating
      setTimeout(() => {
        console.log(user);
        setLoading(false);
        toast.success('Connected Successfully!');
        navigate('/home');
      }, 2000); // Adjust the delay time (in milliseconds) as needed
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <Helmet title={'Login'}>
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg='6'>
                <LoadingSpinner />
              </Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='mt-5 mb-4 fw-bold fs-4'> Login </h3>
                <Form className='mt-3 auth-form' onSubmit={signin}>
                  <FormGroup className='form-group'>
                    <input
                      type='email'
                      placeholder='Enter Email '
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <input
                      type='password'
                      placeholder='Enter Your Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <button className='buy__btn auth__btn' type='submit'>
                    Login
                  </button>
                  <p className='mt-5'>
                    Don't have an account ?{' '}
                    <Link to='/signup'>
                      <strong>Create One</strong>
                    </Link>{' '}
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
