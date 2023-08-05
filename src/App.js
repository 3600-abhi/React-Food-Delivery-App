import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header, Body, Footer, About, PageNotFound, Contact } from "./components";

/**
     
    Header
        - Logo
        - Nav Items (Right Side)
        - Cart

    Body
        - SearchBar
        - Restraunt List
        - Restraunt Card
            - Image 
            - Name 
            - Rating
            - Cusiness

    Footer
        - Links
        - Copyright


*/


function App() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);