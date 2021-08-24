import { useState } from "react";
import "./assets/css/style.css";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

function App() {
  const [center] = useState({
    lat: 59.95,
    lng: 30.33,
  });

  const [mapChange, setMapChange] = useState(null);

  return (
    <div className="w-full h-screen overflow-hidden">
      <Header></Header>
      <div className="flex" style={{height: '91%'}}>
        <List></List>
        <Map center={center} setMapChange={setMapChange}></Map>
      </div>
    </div>
  );
}

export default App;

