import { createBrowserRouter } from "react-router-dom";
import Main from "../../OutlateAll/Main/Main";
import Home from "../../Home/Home";
import Login from "../../AuthoncationAll/Login/Login";
import SingUp from "../../AuthoncationAll/SingUp/SingUp";
import Dashboard from "../../DashbordAll/Dashbord/Dashboard";
import ManageUser from "../../DashbordAll/AdminePanel/ManageUser/ManageUser";
import ManageClasses from "../../DashbordAll/AdminePanel/ManageClasses/ManageClasses";
// import AddClassInstructor from "../../DashbordAll/InstructorPanel/AddClassInstructor/AddClassInstructor";
// import MyClassInstructor from "../../DashbordAll/InstructorPanel/MyClassInstructor/MyClassInstructor";
// import ApprovedClasses fro../../Contact/ApprovedClassesses";
// import MySelectedClass from "../../DashbordAll/StudentPanel/MySelectedClass/MySelectedClass";
// import MyPayment from "../../DashbordAll/StudentPanel/MyPaymentOptions/MyPayment";
import Error from "../Error/Error";
import AdminRoute from "../../../Hook/AdminRoute";
// import InstructorRoute from "../../../Hook/InstructorRoute";
// import PrivateRoute from "../../AuthoncationAll/PrivateRoute/PrivateRoute";
import AboutUs from "../../AboutUs/AboutUs";
import Services from "../../Services/Services";
import ServicesOne from "../../ServicesOne/ServicesOne";
import ServicesTow from "../../ServicesTow/ServicesTow";
import ServicesThree from "../../ServicesThree/ServicesThree";
import Products from "../../Products/Products";
import Contact from "../../Contact/Contact";
import Portfolio from "../../Portfolio/Portfolio";
import PrivacePollice from "../../PrivacePollice/PrivacePollice";
import FAQS from "../../FAQS/FAQS";
import UIUX from "../../UIUX/UIUX";
import DesignOne from "../../Design/DesignOne";
import OrderNow from "../../OrderNow/OrderNow";
import Profile from "../../Profile/Profile";
import BankInfo from "../../OrderNow/BankInfo";
import BankManageInfo from "../../DashbordAll/AdminePanel/BankManage/BankManageInfo";
import AdminHome from "../../DashbordAll/AdminePanel/AdminHome/AdminHome";
import Contactall from "../../DashbordAll/AdminePanel/Contacts/Contactall";
import HomePageControl from "../../DashbordAll/AdminePanel/ManageHomePage/HomePageControl";
import Develop from "../../DashbordAll/AdminePanel/Developer/develop";
import AdminDeveloper from "../../DashbordAll/AdminePanel/AdminDeveloper/AdminDeveloper";
import AdminMessage from "../../DashbordAll/AdminePanel/AdminMessage/AdminMessage";
import Message from "../../Messages/Message";

let route = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element:<Home></Home>
         },
         {
            path: "/login",
            element: <Login></Login>
         },
         {
            path: "/singUp",
            element: <SingUp></SingUp>
         },
         {
            path:"Contact",
            element:<Contact></Contact>
         },
         {
            path:"/AboutUS",
            element:<AboutUs></AboutUs>
         },
         {
            path:"/Services",
            element:<Services></Services>
         },
         {
            path:"/ServicesOne",
            element:<ServicesOne></ServicesOne>
         },
         {
            path:"/ServicesTow",
            element:<ServicesTow></ServicesTow>
         },
         {
            path:"/ServicesThree",
            element:<ServicesThree></ServicesThree>
         },
         {
            path:"/Products",
            element:<Products></Products>
         },
         {
            path:"/developer",
            element:<Develop></Develop>
         },
         {
             path:"/Portfolio",
            element:<Portfolio></Portfolio>
         },
         {
            path:"/PrivatePollice",
            element:<PrivacePollice></PrivacePollice>
         },
         {
             path:"/Product",
            element:<FAQS></FAQS>
         },
         {
            path:"/UIUX",
            element:<UIUX></UIUX>
         },
         {
            path:"/design",
            element:<DesignOne></DesignOne>
         },
         {
            path:"/orderNow",
            element:<OrderNow></OrderNow>
         },
         {
            path:"/sms",
            element: <Message></Message>
         },
         {
            path:"/Profile",
            element:<Profile></Profile>
         }
      ]
   },

   // DashBord Side admine panel 

   {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children:[
         // admin route  
         {
            path:"manageUser",
            element:<ManageUser></ManageUser>
         },
         // admin route  
         {
            path:"manageClasses",
            element:<AdminRoute> <ManageClasses></ManageClasses> </AdminRoute>  
         },
         {
            path:"bank",
            element:<AdminRoute> <BankManageInfo /> </AdminRoute>  
         },
         {
            path:"contacts",
            element:<AdminRoute> <Contactall /> </AdminRoute>  
         },
         {
            path:"editHome",
            element:<AdminRoute> <HomePageControl /> </AdminRoute>  
         },
         {
            path:"tasks",
            element:<AdminRoute> <AdminDeveloper /> </AdminRoute>  
         },
         {
            path:"adminSms",
            element:<AdminRoute> <AdminMessage /> </AdminRoute>  
         },
         {
            path:"adminHome",
            element:<AdminRoute> <AdminHome /> </AdminRoute>  
         },
         
      ]
   },

   {
      path:"*",
      element: <Error></Error>
   }

])

export default route



// https://pdf-c772ot0zs-projectkamrul-gmailcom.vercel.appppppppppppppppppppppppp

