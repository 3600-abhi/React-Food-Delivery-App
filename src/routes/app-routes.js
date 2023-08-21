import { createBrowserRouter } from "react-router-dom";
import {
    App,
    PageNotFound,
    Body,
    About,
    Contact,
    RestaurantDetails,
    Instamart,
    Cart
} from "../components";

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
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails />
            }
        ]
    },
    {
        path: "/instamart",
        element: <Instamart />
    }
]);


export default appRouter;