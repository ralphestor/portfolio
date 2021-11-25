import Image from 'next/image';
import SectionTitle from './SectionTitle';

const About = () => {
    return ( 
        <main>
            <SectionTitle name="About Me" id="about"/>
            <div className="aboutGrid">
                <div>
                    <Image
                        src="/RalphAbout.png"
                        alt="Ralph Estor"
                        width={400}
                        height={400}
                    />
                </div>
                <div>
                    <div>
                        <h4>Overview</h4>
                        <p>Hi! I'm Ralph, a web developer. I'm an Electronics Engineeering student who decided to to code for a living because I feel fulfillment everytime I create software applications.</p>
                    </div>

                </div>

            </div>    
        </main>
     );
}
 
export default About;