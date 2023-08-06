import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import appRouter from "./routes/app-routes";

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


export default function App() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


