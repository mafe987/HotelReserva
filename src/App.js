import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import Home from './components/home.componet';
import Footer from './components/Footer';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" bg="light" variant="light" fixed="top">
          <div className="container">
            <Navbar.Brand as={Link} to="/home">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
            <Navbar.Collapse id="navbarTogglerDemo02">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/iniciar-sesion">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/registro">Registrarme</Nav.Link>
                <Nav.Link as={Link} to="/UserInfo">Información</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/UserInfo" element={<UserInfo />} />
        </Routes>

        {/* Agrega el componente Footer al final del contenedor principal */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
