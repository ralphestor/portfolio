import Image from 'next/image';
import SectionTitle from './SectionTitle';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ ref, inView ] = useInView({
        threshold: 0.9
    });
    const [ textRef, textInView ] = useInView({
        threshold: 0.8
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
        <main id="about">
            <div>
                <SectionTitle name="About Me"/>
            </div>
            <div className="aboutGrid">
                <div className="aboutGrid1">
                    <motion.div ref={ref} initial={{opacity: 0}} animate={animation} className="wrapperDiv">
                    <Image
                        src="/RalphAbout.png"
                        alt="Ralph Estor"
                        width={300}
                        height={300}
                    />
                    </motion.div>
                </div>
                <motion.div ref={textRef} initial={{opacity: 0, x: '50px'}} animate={animationText} className="aboutGrid2">
                    <h4 className="aboutLbl">Overview</h4>
                    <p className="overPar">
                        Hi! I am Ralph, a 22-year old web developer from Davao City, Philippines. I am an Electronics Engineeering student who decided to code for a living because I feel the achievement everytime I create software applications (Please hire me hahaha). Looking forward to grow in a positive and challenging work environment.
                    </p>
                </motion.div>
            </div>
        </main>
     );
}
 
export default About;