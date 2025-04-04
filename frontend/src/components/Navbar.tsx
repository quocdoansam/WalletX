import { Link, useLocation } from "react-router-dom";
import { Chip } from "@mui/material";

import { Info, LocalLibraryRounded, PaidRounded, ReceiptLongRounded, Wallet } from "@mui/icons-material";

const Navbar = () => {

    const location = useLocation();

    return (
        <ul className="navbar">
            <Chip
                sx={{ fontWeight: 800 }}
                variant={location.pathname === '/' ? "filled" : "outlined"}
                label="Overview"
                component={Link}
                to={'/'}
                avatar={<LocalLibraryRounded />}
                clickable
            />
            <Chip
                sx={{ fontWeight: 800 }}
                variant={location.pathname === '/wallet' ? "filled" : "outlined"}
                label="Your Wallet"
                component={Link}
                to={'/wallet'}
                avatar={<Wallet />}
                clickable
            />
            <Chip
                sx={{ fontWeight: 800 }}
                variant={location.pathname === '/earn-money' ? "filled" : "outlined"}
                label="Earn Money"
                component={Link}
                to={'/earn-money'}
                avatar={<PaidRounded />}
                clickable
            />
            <Chip
                sx={{ fontWeight: 800 }}
                variant={location.pathname === '/transaction' ? "filled" : "outlined"}
                label="Transaction"
                component={Link}
                to={'/transaction'}
                avatar={<ReceiptLongRounded />}
                clickable
            />
            <Chip
                sx={{ fontWeight: 800 }}
                variant={location.pathname === '/about' ? "filled" : "outlined"}
                label="About US"
                component={Link}
                to={'/about'}
                avatar={<Info />}
                clickable
            />
        </ul>
    )
}

export default Navbar