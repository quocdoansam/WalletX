import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import { Chip } from '@mui/material';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Chip
                onClick={handleClick}
                sx={{ ml: 2, fontWeight: 800 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                label="Hello, Quoc Doan Sam"
                avatar={<Avatar>D</Avatar>}
            />
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            mt: 1.5,
                            borderRadius: 4,
                            bgcolor: 'var(--secondaryColor)',
                            color: 'var(--onSecondaryColor)',
                            '& .MuiAvatar-root': {
                                width: 24,
                                height: 24,
                                ml: -0.5,
                                mr: 1,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar />
                    View my profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}