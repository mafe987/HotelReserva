import React from 'react';
//import { Alert, Button, Form } from 'react-bootstrap';
import Buscar from './buscar.component';
import RoomList from './RoomList';
import Maps from './maps.component';

const Home = () => {
  return (
    <div className="home-container">
      {/* Reserva de habitaciones */}
      <div className="reservas-container">
        <Buscar />
      </div>

      <div className="inferior">
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
