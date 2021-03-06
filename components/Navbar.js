import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import SvgLogo from './SvgLogo';
import BurgerMenu from './BurgerMenu';


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
                    <Grid item xs={6}>
                        <Link href='/#home' passHref>
                            <SvgLogo/>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <div className='navLinkContain'>
                            <Link href='/#home' passHref>
                                <a className='navLinks'>Home</a>
                            </Link>
                            <Link href='/#about' passHref>
                                <a className='navLinks'>About</a>
                            </Link>
                            <Link href='/#projects' passHref>
                                <a className='navLinks'>Projects</a>
                            </Link>
                            <Link href='/#contacts' passHref>
                                <a className='navLinks'>Contacts</a>
                            </Link>
                        </div> 
                        <div className='burger'>
                            <BurgerMenu/>
                        </div>
                    </Grid>
                </Grid>


            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;