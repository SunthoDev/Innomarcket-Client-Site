import React, { useState } from 'react';
import "./Dashboard.css"
import { NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaShoppingCart, FaCalendarAlt, FaHome } from 'react-icons/fa';
import logo from "../../../assets/logo.png"
import useRole from '../../../Hook/useRole';
import AdminHome from '../AdminePanel/AdminHome/AdminHome';

const Dashboard = () => {
//  npm run build
//  firebase deploy
    const [roles]=useRole()
    const ad=roles?.role === "admin"

    //console.log(roles)
    const [adminHome , setAdminHome] = useState(true);
    const handlePage = () =>{
        setAdminHome(false);
    }
 
    return (


        <div className="drawer lg:drawer-open  bg-[#F6F6F6]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col ">
            
               { adminHome && <AdminHome />}
                <Outlet></Outlet>

                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn  btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>

            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className=" drawer-overlay"></label>

                <ul className="menuParent menu px-6 pt-8 w-80 h-full text-base-content">

                    <div className='mb-4'>

                        <a className="btn  btn-ghost normal-case text-lg pt-6">
                            <img src={logo} alt="" />

                        </a>

                    </div>

                    {/* Sidebar content here */}

                    
                    {/* admin panel  */}
                    {
                        ad && <>
                            <li> <NavLink to="/dashboard/adminHome"><span><FaHome></FaHome></span> Admin Home</NavLink></li>
                            <li onClick={handlePage}> <NavLink to="/dashboard/manageClasses"><span><FaCalendarAlt></FaCalendarAlt></span> Manage Order</NavLink></li>
                            <li onClick={handlePage}> <NavLink to="/dashboard/manageUser"><span><FaWallet></FaWallet></span> Manage User</NavLink></li>
                            <li onClick={handlePage}> <NavLink to="/dashboard/bank"><span><FaWallet></FaWallet></span> Manage Bank</NavLink></li>
                            <li onClick={handlePage}> <NavLink to="/dashboard/contacts"><span><FaWallet></FaWallet></span> Manage Contacts</NavLink></li>
                            <li onClick={handlePage}> <NavLink to="/dashboard/tasks"><span><FaWallet></FaWallet></span> Task Assign</NavLink></li>
                            {/* <li onClick={handlePage}> <NavLink to="/dashboard/editHome"><span><FaWallet></FaWallet></span> Edit Home</NavLink></li> */}
                            <li onClick={handlePage}> <NavLink to="/dashboard/adminSms"><span><FaWallet></FaWallet></span> Message </NavLink></li>
                           
                            </> 
                    }



                    {/* others panel */}
                    <div className="divider  text-white"></div>

                    <li> <NavLink to="/"><span><FaHome></FaHome></span> Home</NavLink></li>

                    <li> <NavLink to="/AboutUS"><span><i class="fa fa-bars" aria-hidden="true"></i></span> About Us</NavLink></li>

                    <li> <NavLink to="/Services"><span><i class="fa fa-shopping-bag" aria-hidden="true"></i></span> Services</NavLink></li>

                    {/* <li> <NavLink to="/Contacts"><span><i class="fa fa-phone" aria-hidden="true"></i></span> kContact</NavLink></li> */}

                </ul>

            </div>
        </div >


    );
};

export default Dashboard;