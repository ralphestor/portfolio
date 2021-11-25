import Image from 'next/image';
import SectionTitle from './SectionTitle';

const About = () => {
    return ( 
        <main>
            <SectionTitle name="About Me" id="about"/>
            <div className="aboutGrid">
                <Image
                    src="/RalphAbout.png"
                    alt="Ralph Estor"
                    width={400}
                    height={400}
                />
            </div>    
        </main>
     );
}
 
export default About;