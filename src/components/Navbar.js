import logo from "../images/airbnb-logo.png"
import "../styles/Navbar.css"

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="" id="logo"/>
        </nav>
    )
}