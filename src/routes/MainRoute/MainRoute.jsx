import { createBrowserRouter } from "react-router-dom";
import App from '../../App'
import Home from "../../pages/Home/Home/Home";
import Ourmenu from "../../pages/OurMenu/Ourmenu/Ourmenu";
import Foods from "../../pages/OurFoods/Foods/Foods";
import Signup from "../../pages/Signup/Signup";
import Login from "../../pages/Login/Login";
import Cart from "../../pages/Cart/Cart";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";


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
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>
            },
        ]
    }
])

export default MainRoute;