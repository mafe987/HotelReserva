import React from 'react';
//import { Alert, Button, Form } from 'react-bootstrap';
import Buscar from './search.component';
import RoomList from './RoomList.component';
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
        <div className="maps-container" style={{ marginLeft: '1em', marginRight: '2em'}}>
          {/* Mapa */}
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Home;
