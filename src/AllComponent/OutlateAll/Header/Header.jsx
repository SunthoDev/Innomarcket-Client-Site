import React, { useContext } from 'react';
import "./Header.css"
import { Link, Navigate } from 'react-router-dom';
import Logo from "../../../assets/logo.png"
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';
import useRole from '../../../Hook/useRole';

const Header = () => {

    let { user, logOutUser } = useContext(AuthContext)
    const [roles]=useRole()
    const ad=roles?.role === "admin"
    const devs=roles?.role === "dev"

    let handelLogOut = () => {
        logOutUser()
            .then(data => { })
            .then(error => { })
    }

    return (
        <div className="">
            {/* ================================= */}
            <div className="Role  px-2 md:px-20 bg-[#1f2b46]  flex justify-between items-center">
                <h2 className='text-white mt-2 mb-2'>Welcome to innomarkt consultancy</h2>
                <div className="">
                    {
                        user ?
                            <div className='items-center flex'>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar md:mr-4 mr-2">
                                    <div className="w-10 rounded-full">
                                        <Link to='/Profile'>
                                            <img src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png" alt="img" />
                                            {/* <img src={user?.photoURL } alt="img" /> */}
                                        </Link>
                                    </div>
                                </label> <button onClick={handelLogOut} className="loginBtn font-bold text-white">Logout</button>
                            </div>
                            :
                               <>
                                <Link to="singUp" className="topmenu text-white ">Sign Up &nbsp;&nbsp;</Link>
                                <Link to="login" className="topmenu text-white ">Sign In</Link>
                               </>
                           
                    }
                </div>
            </div>
            {/* ================================== */}

            <div className="navbar navParent px-2 md:px-20 py-5  z-40 ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">

                            <i class="fa text-white text-2xl fa-bars" aria-hidden="true"></i>

                        </label>

                        <ul tabIndex={0} className="NaveMenu menu menu-sm dropdown-content mt-3 p-3  bg-[#1f2b46]  w-52 z-40">

                            <Link to="/"><a>Home</a></Link>
                            <Link to="/AboutUs"><a>About Us</a></Link>

                            <Link className='Drop' to="/Services"><a><i className="font-bold  pr-1 fa fa-sort-desc" aria-hidden="true"></i>Services</a>
                                <ul class="dropdown z-50">
                                <li><Link to='/Services'><a>Graphic Design</a></Link></li>
                                <li><Link to='/ServicesOne'><a>Software Development</a></Link></li>
                                <li><Link to='/ServicesTow'><a>UI UX</a></Link></li>
                                <li><Link to='/ServicesThree'><a>Web Services</a></Link></li>
                                </ul>

                            </Link>


                            <Link to="/Product"><a>Products</a></Link>
                            
                            <Link to="/Portfolio"><a>Our Work</a></Link>
                            <Link to="/Products"><a>B2B Shop</a></Link>
                            <Link to="/Contact"><a>Contact</a></Link>
                            {
                                ad && <Link to="/dashboard"><a>Dashboard</a></Link>
                            }
                            {
                                devs && <Link to="/developer"><a>Developer</a></Link>
                            }

                        </ul>
                    </div>


                    <div className=''>

                        <Link to="/"><img src={Logo} alt="img" /></Link>

                    </div>

                </div>

                <div className="navbar-center hidden lg:flex">

                    <ul className="NaveMenu menu menu-horizontal px-1">

                        {/* {item} */}

                        <Link to="/"><a>Home</a></Link>
                        <Link to="/AboutUs"><a>About Us</a></Link>
                        <Link className='Drop z-[41]' to="/Services"><a><i className="font-bold  pr-1 fa fa-sort-desc" aria-hidden="true"></i>Services</a>
                            <ul class="dropdown ">
                                <li><Link to='/Services'><a>Graphic Design</a></Link></li>
                                <li><Link to='/ServicesOne'><a>Software Development</a></Link></li>
                                <li><Link to='/ServicesTow'><a>UI UX</a></Link></li>
                                <li><Link to='/ServicesThree'><a>Web Services</a></Link></li>
                            </ul>

                        </Link>
                        {/* <Link  to="/Product"><a><i className="font-bold  pr-1 fa fa-sort-desc" aria-hidden="true"></i>Products</a>
                            <ul class="dropdown z-40">
                                <li><Link to='/Portfolio'>Portfolio</Link></li> 
                                  <li><Link to='/Product'>FAQS</Link></li>
                                <li><Link to='/UIUX'>UI UX</Link></li>
                                <li><Link to='/PrivatePollice'>Privacy Police</Link></li>  
                            </ul>

                        </Link> */}
                        <Link to="/Product"><a>Products</a></Link>
                        <Link to="/Portfolio"><a>Our Work</a></Link>
                        <Link to="/Products"><a>B2B Shop</a></Link>
                        <Link to="/Contact"><a>Contact</a></Link>

                        {
                            ad && <Link to="/dashboard"><a>Dashboard</a></Link>
                        }
                         {
                            devs && <Link to="/developer"><a>Developer</a></Link>
                         }
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                     user ? 
                    <Link to='orderNow' className='text-white OrderNow'>Order Now</Link>
                    :
                    <Link to='login' className='text-white OrderNow'>Order Now</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;