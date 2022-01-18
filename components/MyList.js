import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MyList = () => {
    const [ ref, inView ] = useInView({
        threshold: 0.4
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                transition: { 
                    type: 'ease',
                    duration: 0.5,
                    delay: 0.2
                }
            });
        }
    }, [inView]);

    return ( 
        <motion.section ref={ref}  initial={{opacity: 0}} animate={animation} className="myListGrid">
                <div>
                    <h4 className="aboutLbl myListLbl">Technical Skills</h4>
                    <ul>
                        <li className="listItem">Web Development</li>
                        <li className="listItem">Web Design</li>
                        <li className="listItem">Photo Editing</li>
                        <li className="listItem">Mathematical Skills</li>
                        <li className="listItem">Troubleshooting Software and Hardware Issues</li>
                    </ul>
                </div> 
                <div> 
                    <h4 className="aboutLbl myListLbl">Professional Traits</h4>                    
                    <ul>
                        <li className="listItem">Critical Thinker and Problem Solver</li>
                        <li className="listItem">Good Time Management and Well-Organized</li>
                        <li className="listItem">Keen Eye for Aesthetics</li>
                        <li className="listItem">Trainable and Hardworking</li>
                    </ul>
                </div> 
                <div>
                    <h4 className="aboutLbl myListLbl">Hobbies</h4>                    
                    <ul>
                        <li className="listItem">Sports: Football and Chess</li>
                        <li className="listItem">Arts: Singing and Playing the Guitar </li>
                        <li className="listItem">Watching K-Drama Series</li>
                        <li className="listItem">Cooking and Eating</li>
                    </ul>
                </div>
        </motion.section>
     );
}
 
export default MyList;