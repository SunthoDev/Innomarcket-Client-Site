import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';

const Main = () => {

    return (
        <div>

            <Header></Header>
 
            <Outlet></Outlet>
 
            <Footer></Footer>

        </div>
    );
};

export default Main;