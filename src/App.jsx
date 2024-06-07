import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Eduction from './Component/Eduction';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import {Outlet} from 'react-router-dom'
import Footer from './Component/Footer';

function App() {
return(
    <>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Eduction></Eduction>
    <Skills></Skills>
    <Projects></Projects>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
)
}

export default App;
