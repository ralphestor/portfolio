import SectionTitle from "./SectionTitle";
import { Icon } from '@iconify/react';
import ContactLinks from "./ContactLinks";

const Contacts = () => {
    return ( 
        <main id="contacts">
            <SectionTitle name="Contact Info"/>
            <div className="contactsGrid">
                <h4>You can reach me through Gmail and Facebook</h4>
                <div className="contactAccounts">
                    <ContactLinks content={<Icon icon="simple-icons:gmail" color="#ffffff" width="90" />}/>
                    <ContactLinks content={<Icon icon="akar-icons:facebook-fill" color="#ffffff" width="100" />}/>
                </div>

                <h4 className="marginTop">You can also visit my Github and LinkedIn Accounts</h4>
                <div className="contactAccounts">
                    <ContactLinks content={<Icon icon="akar-icons:github-fill" color="#ffffff" width="100" />}/>
                    <ContactLinks content={<Icon icon="akar-icons:linkedin-fill" color="#ffffff" width="85" />}/>
                </div>
            </div>    
        </main>
     );
}
 
export default Contacts;