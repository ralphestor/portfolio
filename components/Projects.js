import SectionTitle from "./SectionTitle";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Projects = () => {
    return ( 
        <main id="projects">
            <SectionTitle name="My Projects"/>
            <div className="projectsGrid">
                <div>
                    <Card 
                        sx={{ 
                            maxWidth: 400,
                            boxShadow: '5px 5px 10px #888888'
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image="/icsiCard.png"
                            alt="SchoolLogo"
                        />
                        <CardContent
                            sx={{ 
                                padding: '20px 30px 10px 30px'
                            }}
                        > 
                            <h4 className="cardTitle">
                                ICSI: University Website
                            </h4>
                                
                            <Stack 
                                direction="row" 
                                spacing={1}
                                sx={{ 
                                    justifyContent: 'center',
                                    margin: '10px 0'
                                }}
                            >

                                <Chip 
                                    label="EJS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="SCSS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="Express.js" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="MongoDB" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="JQuery" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />

                            </Stack>

                            <p className="paragraph">
                                This website is inpired by the school that I worked for before. It contains the usual pages for a school website. It is capable of posting articles with images. Log In and Sign Up system was implemented with the help of Passport.js so that only admins can post, update, and delete articles. 
                            </p>
              
                        </CardContent>
                        <CardActions
                            sx={{ 
                                justifyContent: 'center',
                                paddingBottom: '20px'
                            }}
                        >
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
                                Visit Github
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card 
                        sx={{ 
                            maxWidth: 400,
                            boxShadow: '5px 5px 10px #888888'
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image="/icsiCard.png"
                            alt="SchoolLogo"
                        />
                        <CardContent
                            sx={{ 
                                padding: '20px 30px 10px 30px'
                            }}
                        > 
                            <h4 className="cardTitle">
                                ICSI: University Website
                            </h4>
                                
                            <Stack 
                                direction="row" 
                                spacing={1}
                                sx={{ 
                                    justifyContent: 'center',
                                    margin: '10px 0'
                                }}
                            >

                                <Chip 
                                    label="EJS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="SCSS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="Express.js" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="MongoDB" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="JQuery" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />

                            </Stack>

                            <p className="paragraph">
                                This website is inpired by the school that I worked for before. It contains the usual pages for a school website. It is capable of posting articles with images. Log In and Sign Up system was implemented with the help of Passport.js so that only admins can post, update, and delete articles. 
                            </p>
              
                        </CardContent>
                        <CardActions
                            sx={{ 
                                justifyContent: 'center',
                                paddingBottom: '20px'
                            }}
                        >
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
                                Visit Github
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card 
                        sx={{ 
                            maxWidth: 400,
                            boxShadow: '5px 5px 10px #888888'
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image="/icsiCard.png"
                            alt="SchoolLogo"
                        />
                        <CardContent
                            sx={{ 
                                padding: '20px 30px 10px 30px'
                            }}
                        > 
                            <h4 className="cardTitle">
                                ICSI: University Website
                            </h4>
                                
                            <Stack 
                                direction="row" 
                                spacing={1}
                                sx={{ 
                                    justifyContent: 'center',
                                    margin: '10px 0'
                                }}
                            >

                                <Chip 
                                    label="EJS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="SCSS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="Express.js" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="MongoDB" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="JQuery" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />

                            </Stack>

                            <p className="paragraph">
                                This website is inpired by the school that I worked for before. It contains the usual pages for a school website. It is capable of posting articles with images. Log In and Sign Up system was implemented with the help of Passport.js so that only admins can post, update, and delete articles. 
                            </p>
              
                        </CardContent>
                        <CardActions
                            sx={{ 
                                justifyContent: 'center',
                                paddingBottom: '20px'
                            }}
                        >
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
                                Visit Github
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card 
                        sx={{ 
                            maxWidth: 400,
                            boxShadow: '5px 5px 10px #888888'
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image="/icsiCard.png"
                            alt="SchoolLogo"
                        />
                        <CardContent
                            sx={{ 
                                padding: '20px 30px 10px 30px'
                            }}
                        > 
                            <h4 className="cardTitle">
                                ICSI: University Website
                            </h4>
                                
                            <Stack 
                                direction="row" 
                                spacing={1}
                                sx={{ 
                                    justifyContent: 'center',
                                    margin: '10px 0'
                                }}
                            >

                                <Chip 
                                    label="EJS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="SCSS" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="Express.js" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="MongoDB" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />
                                <Chip 
                                    label="JQuery" 
                                    variant="outlined"                                 
                                    sx={{ 
                                        fontFamily: 'Poppins',
                                        fontSize: '12px'
                                    }}
                                />

                            </Stack>

                            <p className="paragraph">
                                This website is inpired by the school that I worked for before. It contains the usual pages for a school website. It is capable of posting articles with images. Log In and Sign Up system was implemented with the help of Passport.js so that only admins can post, update, and delete articles. 
                            </p>
              
                        </CardContent>
                        <CardActions
                            sx={{ 
                                justifyContent: 'center',
                                paddingBottom: '20px'
                            }}
                        >
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
                                Visit Github
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>    
        </main>
     );
}
 
export default Projects;