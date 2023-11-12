import { createBrowserRouter } from "react-router-dom";
import App from '../../App'
import Home from "../../pages/Home/Home/Home";
import Ourmenu from "../../pages/OurMenu/Ourmenu/Ourmenu";
import Foods from "../../pages/OurFoods/Foods/Foods";


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
                path: '/foods',
                element: <Foods></Foods>
            }
        ]
    }
])

export default MainRoute;