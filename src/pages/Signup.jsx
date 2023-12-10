import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase.config'
import { toast } from 'react-toastify'
import "../styles/login.css"
import { setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
const Signup = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          //update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL
          });
          //store user data in firestore database
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL
          })
        });
      })
      setLoading(false)
      toast.success('Account Created Successfully')
      navigate('/login')
    } catch (error) {
      setLoading(false)
      console.error(error);
      toast.error("Something Went Wrong");
    }
  }

  return (
    <Helmet title={'Signup'}>
      <section>
        <Container>
          <Row>
            {loading ? (
              // Display loading spinner when loading is true
              <Col lg='6'><LoadingSpinner />  </Col>
            ) : (
              // Display the signup form when loading is false
              <Col lg='6' className='m-auto text-center'>
                <Form className='mt-3 auth-form' onSubmit={signup}>
                  <h3 className='mt-5 mb-4 fw-bold fs-4'> Sign Up </h3>
                  <FormGroup className='form-group'>
                    <input type="text" placeholder='Enter Username ' value={username} onChange={e => setUsername(e.target.value)} required />
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <input type="email" placeholder='Enter Email ' value={email} onChange={e => setEmail(e.target.value)} required />
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <input type="password" placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)} required />
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <input type="file" onChange={e => setFile(e.target.files[0])} />
                  </FormGroup>
                  <button className="buy__btn auth__btn" type='submit'>Signup</button>
                  <p className='mt-5'>Already have an account ? <Link to='/login'> <strong>Connect</strong> </Link> </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
  
}

export default Signup