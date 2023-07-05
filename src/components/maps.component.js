import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 4.137248344090655,
    lng: -73.58812947190529
  };

  const markerPosition = {
    lat: 4.137248344090655,
    lng: -73.58812947190529
  };



  return (
    <LoadScript googleMapsApiKey="AIzaSyDVnrXdzswSZ0Jll_ZQ29KFOaLoL6yzOsQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={18}
        center={defaultCenter}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;