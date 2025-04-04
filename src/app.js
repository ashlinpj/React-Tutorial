import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";



/*----------------------------------------------------------------------*/

const Applayout=()=>{
    return (
        <div className="app">
            <Header></Header>
            <Outlet/>
        </div>
        
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            }
        ]
    }

   
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);