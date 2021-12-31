import SectionTitle from "./SectionTitle";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SingleProject from "./SingleProject";

const Projects = () => {
    return ( 
        <main id="projects">
            <SectionTitle name="My Projects"/>
            <div className="projectsGrid">
                <SingleProject 
                    key={2}
                    cardFlexDirection='row-reverse'
                    imgSrc='/icsiCard.png'
                    imgAlt = 'School Logo'
                    cardTitle='ICSI: University Website'
                    arrayOfTags={['EJS', 'SCSS', 'Express', 'MongoDB', 'JQuery', 'MVC', 'Auth0']}
                    projectPar='This website is inspired by the school that I worked for before. It contains the usual pages for a school website. It is capable of posting articles with images. Log In and Sign Up system was implemented with the help of Auth0 so that only admins can post, update, and delete articles. All the data is stored in MongoDB Atlas.'
                    siteLink='https://icsi-schoolwebsite.herokuapp.com/'
                    githubRepo='https://github.com/ralphestor/icsi'
                />
                <SingleProject 
                    key={1}
                    cardFlexDirection='row'
                    imgSrc='/shanica.png'
                    imgAlt = 'Shanica Logo'
                    cardTitle='SHANICA: Vlogger Website'
                    arrayOfTags={['Next', 'React', 'React-Youtube']}
                    projectPar='This is a website that I created with love because this is for my girlfriend who is into vlogging. I designed this project using Figma and created a minimalistic magazine style. The frontend is programmed using Next.js (React Framework) to utilize the image optimization it offers. I am planning to add a backend API which will be connected to a database so that the admin of the website can edit the contents of each pages.'
                    siteLink='https://shanica.vercel.app/'
                    githubRepo='https://github.com/ralphestor/shanica_site'
                />
                <SingleProject
                    key={3}
                    cardFlexDirection='row-reverse'
                    imgSrc='/todoApp.png'
                    imgAlt = 'TodoApp Logo'
                    cardTitle='TodoApp'
                    arrayOfTags={['React', 'Hooks', 'Material UI', 'Local Storage']}
                    projectPar='A simple todo list project that can create, update, delete todo items. The data is stored in the Local Storage to save the data. This is a React App that uses hooks for state management. Material UI is utilized for pre-styled react components. A class-based component version of this project is also created which is found in classTodo branch of the Github repository.'
                    siteLink='https://todoapp-ralphestor.netlify.app/'
                    githubRepo='https://github.com/ralphestor/todolist'
                />
            </div>    
        </main>
     );
}
 
export default Projects;