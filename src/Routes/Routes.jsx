import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import News from "../Pages/News/News";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/category/:id",
            element:<Category></Category>
        },
        {
            path:"/news/:id",
            element:<News></News>
        }
        ]
        
    }
])