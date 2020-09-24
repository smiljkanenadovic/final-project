import React, {useContext, useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";


const PrivateRoute = ({ component : Component , ...rest }) => {

    const login = useSelector((state) => state.AuthUser);   

    return (
    <Route
        { ...rest }
        render = { props =>  !login.userLoggin ? (<Redirect to='/login'/>) : (<Component {...props}/>)}
    />
    )
}
export default PrivateRoute