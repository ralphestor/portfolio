import Grid from '@mui/material/Grid';

const MyList = () => {
    return ( 
        <section>
            <Grid container spacing={3} marginTop={2}> 
                <Grid item sm={12} md={3}>
                    <h4 className="aboutLbl">Technical Skills</h4>
                    <ul>
                        <li className="listItem">Web Development</li>
                        <li className="listItem">Web Design</li>
                        <li className="listItem">Photo Editing</li>
                        <li className="listItem">Mathematical Skills</li>
                    </ul>
                </Grid> 
                <Grid item sm={12} md={4}>    
                    <h4 className="aboutLbl">Professional Traits</h4>                    
                    <ul>
                        <li className="listItem">Critical Thinker and Problem Solver</li>
                        <li className="listItem">Well-Organized and has Good Time Management </li>
                        <li className="listItem">Keen Eye for Aesthetics</li>
                        <li className="listItem">Trainable and Hardworking</li>
                    </ul>
                </Grid> 
                <Grid item sm={12} md={4}>
                    <h4 className="aboutLbl">Hobbies</h4>                    
                    <ul>
                        <li className="listItem">Sports: Football and Chess</li>
                        <li className="listItem">Arts: Singing and Playing the Guitar </li>
                        <li className="listItem">Watching K-Drama Series</li>
                        <li className="listItem">Cooking and Eating</li>
                    </ul>
                </Grid> 
            </Grid> 
        </section>
     );
}
 
export default MyList;