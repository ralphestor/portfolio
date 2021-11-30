import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Header = () => {

    return ( 
        <header className="mainHeader" id="home">
                <Grid 
                    container 
                    spacing={2} 
                >
                    <Grid item xs={6}>
                        <div className="headerContent">
                            <h1 className="headerName">Ralph Estor</h1>
                            <h2 className="headerJob">Web Developer</h2>

                            <p className="headerText">Innovative front end developer who finds happiness in building programming projects. 100% eager to learn different technologies to meet business goals. Making positive impact directly to the users is my ultimate motivation.</p>
                            <Link href='/#contacts'>
                                <Button 
                                    className="headerBtn" 
                                    variant="contained"
                                    sx={{
                                        marginTop: '10px',
                                        textTransform: 'capitalize',
                                        fontFamily: 'Poppins',
                                        background: 'linear-gradient(45deg, #0097a7 30%, #35CF82 90%)',

                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #29b6f6 30%, #35CF82 90%)',
                                        }
                                    }}
                                >
                                    Contact Me
                                </Button>
                            </Link>

                            
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="headerImage">
                            <Image
                                src="/ralphHeader2.png"
                                alt="Picture of the author"
                                width={400}
                                height={400}
                            />
                        </div>

                    </Grid>
                </Grid>
        </header>
     );
}
 
export default Header;