import axios from "axios";
import { useEffect, useState } from "react";
import "./assets/css/style.css";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

function App() {
  const [coordinate, setCoordinate] = useState({
    lat: -7.227906,
    lng: 107.908699,
  });

  const [bounds, setBounds] = useState(null);
  const [category, setCategory] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [places, setPlaces] = useState([]);
  const [weather, setWeather] = useState([]);

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinate({ lat, lng });
  };

  useEffect(() => {
    if (bounds) {
      axios
        .get(
          `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
          {
            params: {
              bl_latitude: bounds.sw.lat,
              bl_longitude: bounds.sw.lng,
              tr_longitude: bounds.ne.lng,
              tr_latitude: bounds.ne.lat,
            },
            headers: {
              "x-rapidapi-key":
                "3e06cd3365msh6d494af00c1fba7p1ef6d9jsn10062556f158",
              "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            },
          }
        )
        .then((res) => {
          setPlaces(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("https://community-open-weather-map.p.rapidapi.com/find", {
          params: {
            lat: bounds.sw.lat,
            lon: bounds.ne.lng,
          },
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key":
              "3e06cd3365msh6d494af00c1fba7p1ef6d9jsn10062556f158",
          },
        })
        .then((res) => {
          console.log(res.data);
          setWeather(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged}></Header>
      <div className="flex" style={{ height: "91%" }}>
        <List
          category={category}
          setCategory={setCategory}
          rating={rating}
          setRating={setRating}
          places={places.data}
        ></List>
        <Map
          coordinate={coordinate}
          setCoordinate={setCoordinate}
          bounds={bounds}
          setBounds={setBounds}
          places={places.data}
          weather={weather}
        ></Map>
      </div>
    </div>
  );
}

export default App;
