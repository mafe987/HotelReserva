import React from 'react';

const RoomList = () => {
    // Datos de ejemplo para las habitaciones
    const rooms = [
        {
          id: 1,
          capacity: 2,
          photo: process.env.PUBLIC_URL + '/images/hab1.jpg',
        },
        {
          id: 2,
          capacity: 4,
          photo: process.env.PUBLIC_URL +'/images/hab2.jpeg',
        },
        // Agrega más habitaciones si es necesario
      ];
      

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
                                    <button className="btn btn-primary"><a href="/iniciar-sesion" className="enlace">Reservar</a></button>
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
