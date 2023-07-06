import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('URL_DEL_ENDPOINT') // Reemplaza 'URL_DEL_ENDPOINT' por la URL correcta de tu API
      .then(response => response.json())
      .then(data => {
        setRooms(data.rooms);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div className="room-list" style={{ marginLeft: '2em', marginRight: '1em'}}>
      <div className="card-deck">
        {rooms.map((room) => (
          <div key={room.id} className="card room-item">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img src={room.photo} className="card-img" alt={`Habitación ${room.id}`} />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">Habitación {room.id}</h5>
                  <p className="card-text">Capacidad: {room.capacity}</p>
                  <p className="card-text">Precio: {room.payment}</p>
                  <button className="btn btn-primary">
                    <Link to="/login" className="enlace">Reservar</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
