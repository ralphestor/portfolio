import Image from 'next/image';
import SectionTitle from './SectionTitle';

const About = () => {
    return ( 
        <main>
            <SectionTitle name="About Me" id="about"/>
            <div className="aboutGrid">
                <div className="aboutGrid1">
                    <div className="wrapperDiv">
                    <Image
                        src="/RalphAbout.png"
                        alt="Ralph Estor"
                        width={300}
                        height={300}
                    />
                    </div>
                </div>
                <div className="aboutGrid2">
                    {/* <h4 className="aboutLbl">Overview</h4>
                    <p className="paragraph overPar">Hi! I'm Ralph, a 22-year old web developer from Davao City, Philippines. I'm an Electronics Engineeering student who decided to code for a living because I feel the achievement everytime I create software applications (Please hire me hahaha). </p> */}
                </div>
            </div>
        </main>
     );
}
 
export default About;