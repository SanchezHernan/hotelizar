import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';

const Mapa = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: 34.4376,
    zoom: 8
  });

  return (
    <ReactMapGl
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/alexishuck7/cltbzy1ee00mw01p3e9bj652u"
      mapboxApiAccessToken="pk.eyJ1IjoiYWxleGlzaHVjazciLCJhIjoiY2x0YnoxdmpjMXduMDJqcHRwZnA1c29oYyJ9.FUfWRpumoBXn3D_zjqYBug"
      transitionDuration="200"
    />
  );
};

export default Mapa;
