import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';
import RoomList from './RoomList';
import Maps from './maps.component';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card d-flex align-items-center justify-content-center">
        <div className="home-form-container">
          <Form className="home-form">
            <Form.Group controlId="arrival">
              <Form.Label>Llegada</Form.Label>
              <Form.Control type="datetime-local" required/>
            </Form.Group>
            <Form.Group controlId="departure">
              <Form.Label>Salida</Form.Label>
              <Form.Control type="datetime-local" required/>
            </Form.Group>
            <Form.Group controlId="guests">
              <Form.Label>Adultos</Form.Label>
              <Form.Control type="number" min="1" required/>
            </Form.Group>
            <Form.Group controlId="children">
              <Form.Label>Niños</Form.Label>
              <Form.Control type="number" min="0" required />
            </Form.Group>
            <Form.Group controlId="room">
              <Form.Label>Habitación</Form.Label>
              <Form.Control type="number" min="1" required/>
            </Form.Group>
            <div className="search-button-container">
              <Button variant="primary" type="submit">
                Buscar
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <div className='inferior'>
        <div className="room-list-container">
          {/* Listado de habitaciones */}
          <RoomList />
        </div>
        <div className="maps-container">
          {/* Mapa */}
          <Maps />
        </div>
      </div>
    </div>

  );
};

export default Home;
