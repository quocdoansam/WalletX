import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="flex justifi-between">
            <Link to={"/contact"}><li className="px-4 py-2">Contact</li></Link>
            <Link to={"/about"}><li className="px-4 py-2">About</li></Link>
            <Link to={"/wallet"}><li className="px-4 py-2">Wallet</li></Link>
            <Link to={"/account"}><li className="px-4 py-2">Get started</li></Link>
        </ul>
    )
}

export default Navbar