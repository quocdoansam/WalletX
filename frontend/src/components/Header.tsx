import Logo from "./Logo"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="flex justify-between p-2 border-b border-gray-300">
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header