import React from 'react';
import image from '../images/Ubicacion.png';

const Maps = () => {
    return (
        <div className="card map-card">
            <div className="card-body">
                <h5 className="card-title">Mapa</h5>
                {/* Aquí puedes agregar el código para mostrar el mapa */}
                <img src={image} className="center" alt="Ubicacion" />
            </div>
        </div>
    );
};

export default Maps;
