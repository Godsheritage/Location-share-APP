import React, { useRef } from "react";
import { useEffect } from "react";
import { mapTypes } from "../../types";

const Map: React.FC<mapTypes> = ({ center, zoom, style }) => {
  const mapRef = useRef<any>();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);
  return <div ref={mapRef} className="map" style={style}/>
};

export default Map;
