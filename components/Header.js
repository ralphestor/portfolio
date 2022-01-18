import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const Header = () => {
    const [ ref, inView ] = useInView({
        threshold: 0.1
    });
    const [ textRef, textInView ] = useInView({
        threshold: 0.1
    });

    const animation = useAnimation();
    const animationText = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                scale: 1,
                transition: { 
                    type: 'ease',
                    duration: 0.5,
                    delay: 0.5
                }
            });
        }
        if(!inView){
            animation.start({
                opacity: 0,
                scale: 0.7
            })
        }
    }, [inView]);

    useEffect(() => {
        if(textInView){
            animationText.start({
                opacity: 1,
                transition: { 
                    type: 'ease',
                    duration: 0.5,
                    delay: 0.2
                }
            });
        }
        if(!textInView){
            animationText.start({
                opacity: 0
            })

        }
    }, [textInView]);

    return ( 
        <header className="mainHeader" id="home">
                <Grid 
                    container 
                    spacing={2} 
                >
                    <Grid item xs={6}>
                        <motion.div ref={textRef} initial={{opacity: 0}} animate={animationText} className="headerContent">
                            <h1 className="headerName">Ralph Estor</h1>
                            <h2 className="headerJob">Web Developer</h2>

                            <p className="headerText">An innovative web developer who enjoys programming and is dedicated to showing expertise in a work environment. 100% eager to learn different technologies to meet business goals. Creating great applications that make positive impacts is my ultimate motivation.</p>
                            <Link href='/#contacts' passHref>
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

                            
                        </motion.div>
                    </Grid>
                    <Grid item xs={6}>
                        <motion.div ref={ref} initial={{opacity: 0, scale: 0.7, y: '-200px'}} animate={animation} className="headerImage">
                            <Image
                                src="/ralphHeader2.png"
                                alt="Picture of the author"
                                width={400}
                                height={400}
                            />
                        </motion.div>

                    </Grid>
                </Grid>
        </header>
     );
}
 
export default Header;