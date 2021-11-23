import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import SvgLogo from './SvgLogo';




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
        <AppBar position='fixed' className={navbar ? 'navBar scrolled' : 'navBar'}>
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        {/* <Image
                        src="/../public/ralphLogo.png"
                        alt="Ralph Estor Logo"
                        height= {40}
                        width= {150}
                        layout="fixed"

                        /> */}
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
                            
                        </div>
                    </Grid>
                </Grid>


            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;