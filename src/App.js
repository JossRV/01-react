// import logo from './logo.svg';
import './App.css';
// import Lov from './components/lov';
// despues de instalar el router con yarn, importaremos todos las variables
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Profile from './pages/Profile';
import Lov from './components/lov';

// const nombre = "Joss";
const heart = <div className="love"/>;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {heart}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Lov mensaje="Hola amor, ando probando de nuevo, algo me fallo anteriormente" name="Joss"/> */}
        {/* React router DOM
            -Libreria
            -rutas que renderiza dinamicamente un componente 
            Instalacion de react router con yarn
            yarn add react-router-dom*/}

            {/* router es para la lista que se crea visualmente en el sitio web
                asignando a cada uno su path */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-me">About Me</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/profile/joss">Profile</Link>
              </li>
              <li>
                <Link to="/love">Lov</Link>
              </li>
            </ul>
          </div>
          {/* routes es un bloque para asignar los route*/}
          <Routes>
            {/* route es para asignar una ruta y funcione redireccionando 
              de manera dinamica utilizando la lista anterior */}
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about-me' element={<AboutMe/>}></Route>
            {/* React Router Dom Dinamico */}
            <Route path='/profile/:name' element={<Profile/>}></Route>
            <Route path='/love' element={<Lov mensaje="Te amo mucho 😍" name="Joss"/>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
