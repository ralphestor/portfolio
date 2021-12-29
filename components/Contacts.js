import SectionTitle from "./SectionTitle";
import { Icon } from '@iconify/react';
import ContactLinks from "./ContactLinks";




const Contacts = () => {
    return ( 
        <main id="contacts">
            <SectionTitle name="Contact Info"/>
            <div className="contactsGrid">
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
            </div>    
        </main>
     );
}
 
export default Contacts;