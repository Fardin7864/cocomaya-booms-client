import { createBrowserRouter } from "react-router-dom";
import App from '../../App'


const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {

            }
        ]
    }
])

export default MainRoute;