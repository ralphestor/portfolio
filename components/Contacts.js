import SectionTitle from "./SectionTitle";
import { Icon } from '@iconify/react';
import ContactLinks from "./ContactLinks";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';



const Contacts = () => {
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
        <main id="contacts">
            <SectionTitle name="Contact Info"/>
            <motion.div ref={ref} initial={{opacity: 0}} animate={animation} className="contactsGrid">
                <h4>You can reach me through Gmail or Facebook</h4>
                <div className="contactAccounts">
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=ralphestor30@gmail.com&su=Your+Subject+here&body=Your+Message+here&ui=2" target="_blank" rel="noreferrer">
                        <ContactLinks content={<Icon icon="simple-icons:gmail" color="#ffffff" width="90" />}/>
                    </a>
                    <a href="https://www.facebook.com/ralphestor30" target="_blank" rel="noreferrer">
                        <ContactLinks content={<Icon icon="akar-icons:facebook-fill" color="#ffffff" width="100" />}/>
                    </a>
                </div>

                <h4 className="marginTop">You can also visit my Github and LinkedIn Account</h4>
                <div className="contactAccounts">

                    <a href="https://github.com/ralphestor" target="_blank" rel="noreferrer">
                        <ContactLinks content={<Icon icon="akar-icons:github-fill" color="#ffffff" width="100" />}/>
                    </a>
                    <a href="https://www.linkedin.com/in/ralphestor30/" target="_blank" rel="noreferrer">
                    <ContactLinks content={<Icon icon="akar-icons:linkedin-fill" color="#ffffff" width="85" />}/>
                    </a>
                </div>
            </motion.div>    
        </main>
     );
}
 
export default Contacts;