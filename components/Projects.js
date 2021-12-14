import SectionTitle from "./SectionTitle";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Projects = () => {
    return ( 
        <main id="projects">
            <SectionTitle name="My Projects"/>
            <div className="projectsGrid">
                <div>
                    <Card
                        className="card"
                        sx={{
                            width: '100%',
                            boxShadow: '5px 5px 10px #888888',
                            display: 'flex',
                            flexDirection: 'row'
                         }}
                    
                    >
                        <div>
                            <CardMedia
                                className="cardImg"
                                component="img"
                                image="/icsiCard.png"
                                alt="SchoolLogo"
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
                                    ICSI: University Website
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
                                        <Chip 
                                            label="EJS" 
                                            variant="outlined"                                 
                                            sx={{ 
                                                fontFamily: 'Poppins',
                                                fontSize: '12px'
                                            }}
                                        />
                                </Stack>

                                <p className="paragraph">
                                    This website is inspired by the school that I worked for before. It contains the usual pages for a school website. It is capable of posting articles with images. Log In and Sign Up system was implemented with the help of Passport.js so that only admins can post, update, and delete articles. 
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
                                <a className="projBtns" href="https://todoapp-ralphestor.netlify.app/" target="_blank" rel="noreferrer">
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

                                <a className="projBtns" href="https://github.com/ralphestor/icsi" target="_blank" rel="noreferrer">
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
                </div>
                <div>
                    <Card
                        className="card"
                        sx={{
                            width: '100%',
                            boxShadow: '5px 5px 10px #888888',
                            display: 'flex',
                            flexDirection: 'row-reverse'
                         }}
                    
                    >
                        <div>
                            <CardMedia
                                className="cardImg"
                                component="img"
                                image="/todoApp.png"
                                alt="SchoolLogo"
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
                                    TodoApp
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
                                        <Chip 
                                            label="React" 
                                            variant="outlined"                                 
                                            sx={{ 
                                                fontFamily: 'Poppins',
                                                fontSize: '12px'
                                            }}
                                        />
                                        <Chip 
                                            label="Material UI" 
                                            variant="outlined"                                 
                                            sx={{ 
                                                fontFamily: 'Poppins',
                                                fontSize: '12px'
                                            }}
                                        />
                                        <Chip 
                                            label="Local Storage" 
                                            variant="outlined"                                 
                                            sx={{ 
                                                fontFamily: 'Poppins',
                                                fontSize: '12px'
                                            }}
                                        />
                                </Stack>

                                <p className="paragraph">
                                    A simple todo list project that can create, update, delete todo items. The data is stored in the Local Storage to save the data. This project is programmed with Create React App and Material UI is utilized for pre-styled react components. A class-based component version of this project is also created which is found in <i>classTodo</i> branch of the Github repository.
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
                                <a className="projBtns" href="https://todoapp-ralphestor.netlify.app/" target="_blank" rel="noreferrer">
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

                                <a className="projBtns" href="https://github.com/ralphestor/todolist" target="_blank" rel="noreferrer">
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
                </div>
            </div>    
        </main>
     );
}
 
export default Projects;