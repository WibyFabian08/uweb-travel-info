import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

const Map = ({ center }) => {
  const [coords, setCoords] = useState({
    lat: "",
    lng: "",
  });
  return (
    <div className="w-4/6 bg-green-400">
      <div className="w-full h-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
          defaultCenter={center}
          center={center}
          margin={[50, 50, 50, 50]}
          defaultZoom={14}
          onChange={(e) => {
            console.log(e);
          }}
          onClick={(e) =>
            setCoords({
              lat: e.lat,
              lng: e.lng,
            })
          }
          onChildClick={(e) => console.log(e)}
        >
          <div
            className="bg-green-500 rounded-full"
            lat={coords.lat}
            lng={coords.lng}
            style={{ height: 50, width: 50 }}
          ></div>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
