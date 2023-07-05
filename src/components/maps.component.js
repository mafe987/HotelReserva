import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 2.3334262371063232,
    lng: -72.628662109375
  };

  const markerPosition = {
    lat: 2.3334262371063232,
    lng: -72.628662109375
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
