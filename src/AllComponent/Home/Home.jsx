import React from 'react';
import "./Home.css"
import Banner from '../HomeAllSection/Banner/Banner';
import Services from '../HomeAllSection/Services/Services';
import LiveChat from '../HomeAllSection/LiveChat/LiveChat';
import ResentComplete from '../HomeAllSection/ResentComplete/ResentComplete';
import CustomerSay from '../HomeAllSection/CustomerSay/CustomerSay';
import GetTouch from '../HomeAllSection/GetTouch/GetTouch';
import NeedHelpe from '../HomeAllSection/NeedHelpe/NeedHelpe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <LiveChat></LiveChat>
            <ResentComplete></ResentComplete>
            <CustomerSay></CustomerSay>
            <GetTouch></GetTouch>
            <NeedHelpe></NeedHelpe>
            
        </div>
    );
};

export default Home;