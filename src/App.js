import React, { useState, createContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import Home from './components/home.componet';
import Footer from './components/Footer';
import UserInfo from './components/UserInfo';
import SiteMap from './components/mapaSitio';
import ReservationForm from './components/formReservas';

// Crea un contexto para compartir el estado del tamaño de fuente
export const FontSizeContext = createContext();

function App() {
  const [fontSize, setFontSize] = useState(16);

  function handleFontIncrease() {
    setFontSize(prevSize => prevSize + 2);
  }

  function handleFontDecrease() {
    setFontSize(prevSize => prevSize - 2);
  }

  return (
    <FontSizeContext.Provider value={fontSize}>
      <Router>
        <div className="App">
          <Navbar expand="lg" bg="light" variant="light" fixed="top">
            <div className="container">
              <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
              <Navbar.Collapse id="navbarTogglerDemo02">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/iniciar-sesion">Iniciar sesión</Nav.Link>
                  <Nav.Link as={Link} to="/registro">Registrarme</Nav.Link>
                  <Nav.Link as={Link} to="/UserInfo">Información</Nav.Link>
                  <Nav.Link as={Link} to="/ReservationForm">Reservar</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="accessibility-dropdown">
                     <FontAwesomeIcon icon={faUniversalAccess} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Button variant="primary" onClick={handleFontIncrease}>
                          <FontAwesomeIcon icon={faPlus} /> <span>Aumentar</span>
                        </Button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Button variant="primary" onClick={handleFontDecrease}>
                         <FontAwesomeIcon icon={faMinus} /> <span>Disminuir</span>
                       </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </div>
      </Navbar>

      <div style={{ fontSize: `${fontSize}px` }}>
        <Routes>
        
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route path="/" element={<Home />} />
          <Route path="/SiteMap" element={<SiteMap/>} />
          <Route path="/ReservationForm" element={<ReservationForm/>} />
        </Routes>
      </div>
      <div style={{ fontSize: `${fontSize}px` }}>
        <Footer />
      </div>
      </div>
      </Router >
    </FontSizeContext.Provider >
  );
}
export default App;
