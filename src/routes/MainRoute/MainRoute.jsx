import { createBrowserRouter } from "react-router-dom";
import App from '../../App'
import Home from "../../pages/Home/Home/Home";
import Ourmenu from "../../pages/OurMenu/Ourmenu/Ourmenu";
import Foods from "../../pages/OurFoods/Foods/Foods";
import Signup from "../../pages/Signup/Signup";
import Login from "../../pages/Login/Login";
import Cart from "../../pages/Cart/Cart";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import PrivetRout from "../Privet/PrivetRout";
import ManageUsers from "../../pages/AdminPages/ManageUsers/ManageUsers";


const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/menu',
                element: <Ourmenu></Ourmenu>
            },
            {
                path: '/food',
                element: <Foods></Foods>
            },

        ]
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/dashboard',
        element: <PrivetRout><Dashboard></Dashboard></PrivetRout> ,
        children:[
            {
                path: '/dashboard/cart',
                element: <PrivetRout><Cart></Cart></PrivetRout>
            },
            {
                path: '/dashboard/users',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
])

export default MainRoute;