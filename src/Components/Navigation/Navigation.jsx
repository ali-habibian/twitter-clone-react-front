import * as React from 'react';
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Auth/Action';

const Navigation = () => {

    const { auth } = useSelector(store => store)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log("logout")
        handleClose()
        dispatch(logout())
    }

    const navigate = useNavigate();

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <img width={30} height={30} src='https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg' alt='x-logo' />
                </div>

                <div className='space-y-6'>
                    {navigationMenu.map(
                        (item) =>
                            <div className='cursor-pointer flex space-x-3 item-center'
                                onClick={() =>
                                    item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}>
                                {item.icon}
                                <p className='text-xl'>{item.title}</p>
                            </div>
                    )}
                </div>
            </div>

            <div className='py-10'>
                <Button
                    sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5" }}
                    variant='contained'
                >
                    Tweet
                </Button>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar
                        alt='username'
                        src={logo}
                        sx={{ width: 50, height: 50 }} />

                    <div>
                        <span>{auth.user?.fullname} </span>
                        <span className='opacity-70'>
                            @{auth.user?.fullname.split(" ").join("_").toLowerCase()}
                        </span>
                    </div>

                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreHorizIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>

        </div>
    )
}

export default Navigation