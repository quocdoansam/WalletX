import { useNavigate } from "react-router-dom"
import Logo from "./Logo"
import Navbar from "./Navbar"
import { Avatar, Button, Chip } from "@mui/material";
import AccountMenu from "./AccountMenu";

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
                <AccountMenu />
            </div>
        </header>
    )
}

export default Header