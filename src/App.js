import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { Header, Footer } from "./components";
import appRouter from "./routes/app-routes";
import store from "./store/store";

export default function App() {

    return (
        <>
            <Provider store={store}>
                <Header />
                <Outlet />
                <Footer />
            </Provider>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


