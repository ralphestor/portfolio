import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return ( 
        <div className='content'>
            <Navbar/>
            <Header/>
                { children }
            <Footer/>
        </div>
    );
}
 
export default Layout;