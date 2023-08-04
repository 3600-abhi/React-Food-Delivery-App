import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Body, Footer } from "./components";

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
            <Body />
            <Footer />
        </>
    );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);