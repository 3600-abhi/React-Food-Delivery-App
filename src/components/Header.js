import { useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "./index";

function Header() {

    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact</Link></li>
                    <li><Link to="/cart" >Cart</Link></li>
                </ul>
            </div>

            {
                loginStatus
                    ?
                    <button onClick={_ => setLoginStatus(false)} >Logout</button>
                    :
                    <button onClick={_ => setLoginStatus(true)} >Login</button>
            }

        </div>
    );
}

export default Header;