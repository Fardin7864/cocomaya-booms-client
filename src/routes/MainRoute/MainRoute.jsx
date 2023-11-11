import { createBrowserRouter } from "react-router-dom";
import App from '../../App'
import Home from "../../pages/Home/Home/Home";


const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default MainRoute;