import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import SvgLogo from './SvgLogo';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const  [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground);
    }

    // burger js
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    return (
        <AppBar 
            position='fixed' 
            className={navbar ? 'navBar scrolled' : 'navBar'}
            sx={{
                backgroundColor: '#00000000',
                boxShadow: '0'
            }}
        >
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs={5}>

                        <SvgLogo/>
                    </Grid>
                    <Grid item xs={7}>
                        <div className='navLinkContain'>
                            <Link href='/'>
                                <a className='navLinks'>Home</a>
                            </Link>
                            <Link href='/'>
                                <a className='navLinks'>About</a>
                            </Link>
                            <Link href='/'>
                                <a className='navLinks'>Projects</a>
                            </Link>
                            <Link href='/'>
                                <a className='navLinks'>Contacts</a>
                            </Link>
                        </div> 
                        <div className='burger'>
                            <div>
                            <Button
                                className = 'navBtn'
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon/>
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
                                <MenuItem onClick={handleClose}>Home</MenuItem>
                                <MenuItem onClick={handleClose}>About</MenuItem>
                                <MenuItem onClick={handleClose}>Projects</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                            </div>
                        </div>
                    </Grid>
                </Grid>


            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;