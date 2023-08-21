import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";
import { useOnline } from "../hooks";
import store from "../store/store";


function Header() {

    const isOnline = useOnline();

    const [loginStatus, setLoginStatus] = useState(false);
    const cartItems = useSelector(store => store.cart.items);


    return (

        <div className="flex space-x-10 justify-between bg-yellow-50 shadow-lg">

            <a href="/">
                <img className="h-28 w-28 p-2" alt="logo" src={Logo} />
            </a>

            <div>
                <ul className="flex py-10">
                    <li className="px-2">{isOnline ? "✅" : "🔴"}</li>
                    <li className="px-2" ><Link to="/" >Home</Link></li>
                    <li className="px-2" ><Link to="/about" >About</Link></li>
                    <li className="px-2" ><Link to="/contact" >Contact</Link></li>
                    <li className="px-2" ><Link to="/instamart" >Instamart</Link></li>
                    <li className="px-2" ><Link to="/cart" >Cart-{cartItems.length}</Link></li>
                </ul>
            </div>

            {
                loginStatus
                    ?
                    <button className="text-white py-10 h-10 bg-yellow-400 hover:bg-yellow-500" onClick={_ => setLoginStatus(false)} >Logout</button>
                    :
                    <button className="text-white py-10 h-10 bg-yellow-400 hover:bg-yellow-500" onClick={_ => setLoginStatus(true)} >Login</button>
            }

        </div>
    );
}

export default Header;