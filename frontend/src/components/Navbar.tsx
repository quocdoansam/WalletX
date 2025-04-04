import { Link, useLocation } from "react-router-dom";
import overviewSVG from "../assets/icons/overview.svg";
import aboutSVG from "../assets/icons/about.svg";
import walletSVG from "../assets/icons/wallet.svg";
import moneySVG from "../assets/icons/money.svg";
import transactionSVG from "../assets/icons/transaction.svg"

const Navbar = () => {

    const location = useLocation();

    return (
        <ul className="navbar">
            <Link to={"/"}>
                <li className={`nav nav-overview ${location.pathname === "/" ? "nav-active" : ""}`}>
                    <img src={overviewSVG} alt="Overview" />
                    <span>Overview</span>
                </li>
            </Link>
            <Link to={"/about"}>
                <li className={`nav nav-about ${location.pathname === "/about" ? "nav-active" : ""}`}>
                    <img src={aboutSVG} alt="About" />
                    <span>About</span>
                </li>
            </Link>
            <Link to={"/wallet"}>
                <li className={`nav nav-wallet ${location.pathname === "/wallet" ? "nav-active" : ""}`}>
                    <img src={walletSVG} alt="Wallet" />
                    <span>Your Wallet</span>
                </li>
            </Link>
            <Link to={"/earn-money"}>
                <li className={`nav nav-earn-money ${location.pathname === "/earn-money" ? "nav-active" : ""}`}>
                    <img src={moneySVG} alt="Earn Money" />
                    <span>Earn Money</span>
                </li>
            </Link>
            <Link to={"/transaction"}>
                <li className={`nav nav-transaction ${location.pathname === "/transaction" ? "nav-active" : ""}`}>
                    <img src={transactionSVG} alt="Transaction" />
                    <span>Transaction</span>
                </li>
            </Link>
        </ul>
    )
}

export default Navbar