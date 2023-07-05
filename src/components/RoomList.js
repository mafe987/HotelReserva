import React from 'react';
import roomData from '../data/roomData.json';
import { Link } from 'react-router-dom';

const RoomList = () => {
  const { rooms } = roomData;

  return (
    <div className="room-list">
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
                  <button className="btn btn-primary">
                    <Link to="/ReservationForm" className="enlace">Reservar</Link>
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
