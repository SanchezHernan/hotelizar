import React, { useState, useEffect, useCallback } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "@chakra-ui/react";
import PopupAlojamiento from './PopupAlojamiento';
import { initialViewport } from '../config/mapConfig';
import { getRentals } from '../services/rental';


const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const Mapa = () => {
  const [viewport, setViewport] = useState(initialViewport);
  const [alojamientos, setAlojamientos] = useState([]);
  const [selectedAlojamiento, setSelectedAlojamiento] = useState(null);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const rentalsData = await getRentals();
  //       setAlojamientos(rentalsData);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const fetchRentals = useCallback(async () => {
    try {
      const rentalsData = await getRentals();
      setAlojamientos(rentalsData);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchRentals();
  }, [fetchRentals]);



  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lat = parseFloat(urlParams.get('lat'));
    const lng = parseFloat(urlParams.get('lng'));

    if (!isNaN(lat) && !isNaN(lng)) {
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: lat,
        longitude: lng,
        zoom: 15,
      }));
    } else {
      // If no lat and lng parameters, get the user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setViewport((prevViewport) => ({
              ...prevViewport,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }));
          },
          (error) => {
            console.error('Error obteniendo la ubicación:', error);
          },
          { enableHighAccuracy: true, timeout: 9000, maximumAge: 0 }
        );
      } else {
        console.error('Geolocalización no es soportada por este navegador.');
      }
    }
  }, []);


  const handleMapClick = () => setSelectedAlojamiento(null);
  ;

  const handlePopupClick = (event) => event.stopPropagation();
  
  if (error) {
    return <Box>Error: {error.message}</Box>;
  }

  return (
    <Box className="map-container">
      <ReactMapGL
        mapboxAccessToken={MAPBOX_TOKEN}
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
        onClick={handleMapClick}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl style={{ right: 10, top: 10 }} />

        {alojamientos.map(alojamiento => (
          <Marker
            key={alojamiento.id_rental}
            latitude={alojamiento.lat_rental}
            longitude={alojamiento.lng_rental}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedAlojamiento(alojamiento);
            }}
          >
          </Marker>
        ))}

        {userLocation && (
          <Marker
            latitude={userLocation.latitude}
            longitude={userLocation.longitude}
          >
            <div className="user-location-marker" />
          </Marker>
        )}

        {selectedAlojamiento && (
          <Popup
            latitude={selectedAlojamiento.lat_rental}
            longitude={selectedAlojamiento.lng_rental}
            onClose={() => setSelectedAlojamiento(null)}
            closeOnClick={true}
            anchor="top"
            onClick={handlePopupClick}
          >
            <PopupAlojamiento
              title={selectedAlojamiento.title_rental}
              rating={selectedAlojamiento.averagerating_rental}
              price={selectedAlojamiento.totalrprice_rental}
              id={selectedAlojamiento.id_rental}
              lat={selectedAlojamiento.lat_rental}
              lng={selectedAlojamiento.lng_rental}
            />
          </Popup>
        )}
      </ReactMapGL>
    </Box>
  );
};

export default Mapa;
