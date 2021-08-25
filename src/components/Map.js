import React from "react";
import GoogleMapReact from "google-map-react";

import mapStyles from "../mapStyles";

const Map = ({
  coordinate,
  setCoordinate,
  setChildClicked,
  setBounds,
  places,
  weather,
}) => {
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
          }}
          onChildClick={(child) => {
            setChildClicked(child)
          }}
        >
          {places &&
            places.map((place, index) => {
              return (
                <div
                  className="overflow-hidden bg-white rounded-lg shadow-2xl"
                  lat={place?.latitude}
                  lng={place?.longitude}
                  key={index}
                  style={{ height: 80, width: 80, cursor: "pointer" }}
                >
                  <img
                    src={place ? place.photo?.images?.thumbnail?.url : ''}
                    className="object-cover w-full"
                    alt="place"
                  />
                  <div className="px-1">
                    <p className="" style={{ fontSize: 8 }}>
                      {place && place?.name}
                    </p>
                    <p className="" style={{ fontSize: 8 }}>
                      {place && place?.phone}
                    </p>
                  </div>
                </div>
              );
            })}

          {weather &&
            weather.list?.length > 0 &&
            weather.list?.map((data, index) => {
              return (
                <div lat={data?.coord?.lat} lng={data?.coord?.lon} key={index}>
                  <img
                    src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    height="70px"
                  />
                </div>
              );
            })}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
