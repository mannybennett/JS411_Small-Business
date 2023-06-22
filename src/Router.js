import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import AddListing from './containers/AddListing'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedIn'] ? true : false;
}

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;
    return checkAuth() ? <Component {...rest}/> : <Navigate to='/login'/>
};

const Router = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/listings" element={<Listings/>} />
            <Route path="/dashboard" element={<ProtectedRoute component={ Dashboard }/>} />
            <Route path="/addlisting" element={<ProtectedRoute component={ AddListing }/>} />
        </Routes>
    );
};

export default Router;