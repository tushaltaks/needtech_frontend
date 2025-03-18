import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import HeaderLogin from '../HeaderLogin';

const LayoutLogin = () => {
    return (
        <>
            <HeaderLogin />
            <Outlet />
            <Footer />
        </>
    );
}

export default LayoutLogin;
