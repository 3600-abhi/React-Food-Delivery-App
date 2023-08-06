import { createBrowserRouter } from "react-router-dom";
import { App, PageNotFound, Body, About, Contact, RestaurantDetails } from "../components";

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
    },
    {
        path: "/restaurant/:id",
        element: <RestaurantDetails />
    }
]);


export default appRouter;