import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../actions/loginUser";

const Login = (props) => {

    const login = useSelector((state) => state.AuthUser);   
    const dispatch = useDispatch();
    const loginU = (login) => dispatch(loginUser(login));

    useEffect(() => {        
        if(login.userLoggin) {
          props.history.push('/')
        }
    }, [login, props.history])

    const submit = e => {     
        e.preventDefault()
        loginU(true)
    }

    return (        
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit} >
                <input type="email" name="email"   placeholder="Email" />
                <input type="password" name="password"   placeholder="Password"  required />
                <input type="submit" value="Login" className="btn" />
            </form>         
        </div>
    )
}
export default Login