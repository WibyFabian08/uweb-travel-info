import React from "react";
import GoogleMapReact from "google-map-react";

import restoran from "../assets/images/restoran.png";

import mapStyles from "../mapStyles";

const Map = ({ coordinate, setCoordinate, bounds, setBounds }) => {
  return (
    <div className="w-4/6 bg-white">
      <div className="w-full h-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
          defaultCenter={coordinate}
          center={coordinate}
          margin={[50, 50, 50, 50]}
          defaultZoom={14}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
          onChange={(e) => {
            setCoordinate({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
            console.log(e);
          }}
          onClick={(e) => console.log(e)}
          onChildClick={(child) => console.log(child)}
        >
          <div
            className="overflow-hidden bg-white rounded-lg shadow-2xl"
            lat={coordinate.lat}
            lng={coordinate.lng}
            style={{ height: 80, width: 80, cursor: "pointer" }}
          >
            <img
              src={restoran}
              className="object-cover w-full"
              alt="restoran"
            />
            <div className="px-1">
              <p className="" style={{ fontSize: 8 }}>
                Restoran Jepang
              </p>
              <p className="" style={{ fontSize: 8 }}>
                Rating
              </p>
            </div>
          </div>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
