import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SingleProject = props => {
    const [ ref, inView ] = useInView({
        threshold: 0.4
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                x: 0,
                transition: { 
                    type: 'ease',
                    duration: 0.5,
                    delay: 0.2
                }
            });
        }
    }, [inView]);

    const chips = props.arrayOfTags.map(tag => {
        return(
            <Chip 
                key={tag}
                label={tag} 
                variant="outlined"                                 
                sx={{ 
                    fontFamily: 'Poppins',
                    fontSize: '12px'
                }}
            />
        )
    })

    return ( 
                <motion.div ref={ref} initial={{opacity: 0, x: '50px'}} animate={animation}>
                    <Card
                        className="card"
                        sx={{
                            width: '100%',
                            boxShadow: '5px 5px 10px #888888',
                            display: 'flex',
                            flexDirection: `${props.cardFlexDirection}`
                        }}
                    
                    >
                        <div>
                            <CardMedia
                                className="cardImg"
                                component="img"
                                image={props.imgSrc}
                                alt={props.imgAlt}
                                sx={{
                                    width: '300px',
                                    height: '100%'
                                 }}
                                
                            />
                        </div>
                        <div>
                            <CardContent
                                sx={{ 
                                    padding: '20px 30px 10px 30px'
                                }}
                            > 
                                <h4 className="cardTitle">
                                    {props.cardTitle}
                                </h4>
                                    
                                <Stack 
                                    direction="row" 
                                    spacing={1}
                                    sx={{ 
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        margin: '10px',
                                        gap: '5px 3px'
                                    }}
                                >
                                    {chips}
                                </Stack>

                                <p className="paragraph">
                                    {props.projectPar}
                                </p>
                
                            </CardContent>
                            <CardActions
                                sx={{ 
                                    justifyContent: 'center',
                                    paddingBottom: '20px',
                                    '@media screen and (max-width: 400px)': {
                                        flexDirection: 'column'
                                    }
                                }}
                            >
                                <a className="projBtns" href={props.siteLink} target="_blank" rel="noreferrer">
                                    <Button 
                                        variant="contained"
                                        sx={{
                                            marginTop: '10px',
                                            textTransform: 'capitalize',
                                            fontFamily: 'Poppins',
                                            backgroundColor: '#1F583C', 
                                            transition: 'all 0.3s ease-in-out',
                                            
                                            '&:hover': {
                                                backgroundColor: '#4abb75',
                                            }
                                        }}
                                    >
                                        Visit Site
                                    </Button>
                                </a>

                                <a className="projBtns" href={props.githubRepo} target="_blank" rel="noreferrer">
                                    <Button 
                                        variant="outlined"
                                        sx={{
                                            marginTop: '10px',
                                            textTransform: 'capitalize',
                                            fontFamily: 'Poppins',
                                            color: '#1F583C', 
                                            border: '1px solid #1F583C', 
                                            transition: 'all 0.3s ease-in-out',
                                            
                                            '&:hover': {
                                                backgroundColor: '#4abb75',
                                                border: '1px solid #4abb75', 
                                                color: '#FFFFFF'
                                            }
                                        }}
                                    >
                                        Github Repo
                                    </Button>
                                </a>
                            </CardActions>
                        </div>
                    </Card>
                </motion.div>
     );
}
 
export default SingleProject;