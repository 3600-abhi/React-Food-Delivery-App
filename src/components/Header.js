import { useEffect, useState } from "react";
import { Title } from "./index";

function Header() {

    const [loginStatus, setLoginStatus] = useState(false);
    
    function Login() {
        setLoginStatus(true);
    }

    function Logout() {
        setLoginStatus(false);
    }

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

            {loginStatus ? <button onClick={Logout} >Logout</button> : <button onClick={Login} >Login</button>}

        </div>
    );
}

export default Header;