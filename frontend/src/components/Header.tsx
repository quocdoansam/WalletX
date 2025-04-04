import { useNavigate } from "react-router-dom"
import DefaultButton from "./DefaultButton"
import Logo from "./Logo"
import Navbar from "./Navbar"
import loginSVG from "../assets/icons/login.svg"
import Icon from "./Icon"

const Header = () => {

    const navigate = useNavigate();

    const openLoginPage = () => {
        navigate("/login");
    }

    return (
        <header className="container">
            <div className="header-item"><Logo /></div>
            <div className="header-item"><Navbar /></div>
            <div className="header-item">
                <DefaultButton className="join-button" text="Join" onClick={openLoginPage} prefix={<Icon src={loginSVG} alt="Login" />} />
            </div>
        </header>
    )
}

export default Header