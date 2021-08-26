import React from "react";
import GoogleMapReact from "google-map-react";

import Rating from "@material-ui/lab/Rating";
import SearchIcon from "@material-ui/icons/Search";

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
    <div className="relative w-4/6 bg-white">
      <div className="w-full h-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
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
          onChildClick={(e) => {
            setChildClicked(e);
          }}
        >
          {places &&
            places.map((place, index) => {
              return (
                <div
                  className="relative z-0 overflow-hidden bg-white rounded-lg shadow-2xl hover:z-20"
                  lat={place?.latitude}
                  lng={place?.longitude}
                  key={index}
                  style={{ width: 100 }}
                >
                  <div className="p-2">
                    <div className="flex">
                    <SearchIcon fontSize="small" style={{cursor: "pointer"}}></SearchIcon> 
                    <p className="font-bold" style={{ fontSize: 10 }}>
                      {place && place?.name}
                    </p>
                    </div>
                    <img
                      src={place ? place.photo?.images?.thumbnail?.url : ""}
                      className="object-cover w-full rounded-lg"
                      alt="place"
                    />
                    <Rating
                      name="disabled"
                      size="small"
                      value={Number(place?.rating)}
                      disabled
                    />
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
                    alt="weather"
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
