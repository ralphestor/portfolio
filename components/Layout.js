import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';
import Contacts from './Contacts';

const Layout = ({ children }) => {
    return ( 
        <div className='content'>
            <Navbar/>
            <Header/>
            <div className="mainContainer">
                <About/>
                <Projects/>
                <Contacts/>
                { children }
            </div>

            <Footer/>
        </div>
    );
}
 
export default Layout;