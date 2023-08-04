import Logo from "../assets/logo.png";


function Title() {
    return (
        <a href="/">
            <img className="logo" alt="logo" src={Logo} />
        </a>
    );
}


export default Title;