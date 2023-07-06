import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const SiteMap = () => {
  return (
    <div style={{ marginTop: '7em', marginLeft: '30em', maxWidth: '400px' }}>
      <h1>Mapa del Sitio</h1>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/">Home</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/iniciar-sesion">Iniciar Sesión</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/registro">Registrarse</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/UserInfo">Información de Usuario Registrado</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/reservations">Reservas</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/directions">Cómo Llegar</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SiteMap;
