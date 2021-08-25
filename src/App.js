import { useEffect, useState } from "react";
import { getPlaces, getWeather } from "./api/getDataApi";
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
  const [rating, setRating] = useState(0);
  const [autocomplete, setAutocomplete] = useState(null);
  const [places, setPlaces] = useState([]);
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);

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
      getPlaces(bounds, setPlaces, setIsLoading, category);
      getWeather(bounds, setWeather, setIsLoading);
    }
  }, [bounds, category]);

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
          isLoading={isLoading}
          childClicked={childClicked}
        ></List>
        <Map
          coordinate={coordinate}
          setCoordinate={setCoordinate}
          bounds={bounds}
          setBounds={setBounds}
          places={places.data}
          weather={weather}
          setChildClicked={setChildClicked}
        ></Map>
      </div>
    </div>
  );
}

export default App;
