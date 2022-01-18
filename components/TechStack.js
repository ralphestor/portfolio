import { Icon } from '@iconify/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TechStack = () => {
    const [ ref, inView ] = useInView({
        threshold: 0.3
    });
    const [ textRef, textInView ] = useInView({
        threshold: 0.3
    });

    const animation = useAnimation();
    const animationText = useAnimation();

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

    useEffect(() => {
        if(textInView){
            animationText.start({
                x: 0,
                opacity: 1,
                transition: { 
                    type: 'ease',
                    duration: 0.5,
                    delay: 0.2
                }
            });
        }
    }, [textInView]);

    return (
        <section>
            <h4 className="textStackLbl">Tech Stack I Use for my Projects</h4>
            <motion.div ref={ref} initial={{opacity: 0}} animate={animation} className="gridIcons">
                <Icon className="gridIcon" icon="vscode-icons:file-type-html" height="80px"/>
                <Icon className="gridIcon" icon="vscode-icons:file-type-css" height="80px"/>
                <Icon className="gridIcon" icon="logos:javascript" height="80px"/>
                <Icon className="gridIcon" icon="logos:jquery" height="80" />
                <Icon className="gridIcon" icon="logos:express" height="80" />
                <Icon className="gridIcon" icon="logos:react" height="80" />
                <Icon className="gridIcon" icon="logos:nextjs" height="80" />
                <Icon className="gridIcon" icon="logos:material-ui" height="80" />
                <Icon className="gridIcon" icon="logos:mongodb" height="80" />
                <Icon className="gridIcon" icon="logos:sass" height="80" />
            </motion.div>
            <motion.p ref={textRef} initial={{opacity: 0, x: '50px'}} animate={animationText} className="paragraph parTech">Strong foundational knowledge of <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. <b>SASS</b> for browser compatible CSS and developer-friendly syntax and features. <b>JQuery</b> for frontend enhancement purposes. <b>Express</b> for REST applications and easy middleware management. <b>MongoDB</b> for NoSQL database connection for web applications. <b>React</b> for code reusability and performance enhancement. <b>Material UI</b> for pre-styled React Components for fast frontend development. <b>Next.js</b> for super fast performance from Server Side Rendering and for improved SEO. </motion.p>
        </section>
     );
}
 
export default TechStack;