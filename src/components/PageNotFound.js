import { useRouteError } from "react-router-dom";

function PageNotFound() {

    const error = useRouteError();

    return (
        <>
            <h1>{error.status + " " + error.statusText}</h1>
            <h2>{error.data}</h2>
        </>
    );
}


export default PageNotFound;