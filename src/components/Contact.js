import { useContext } from "react";
import { UserContext } from "../context";

function Contact() {

    const user = useContext(UserContext);

    return (
        <div>
            <h1>Welcome to Contact Page {user.email}</h1>
        </div>
    );
}


export default Contact;