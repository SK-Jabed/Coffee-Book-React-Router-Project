import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Coffees from "../pages/Coffees/Coffees";
import Dashboard from "../pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <HomePage></HomePage>,
            children: [
                {
                    
                }
            ]
        },
        {
            path: "/coffees",
            element: <Coffees></Coffees>
        },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
        }
    ]
  },
]);

export default routes;
