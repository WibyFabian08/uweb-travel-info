import axios from "axios";

export const getPlaces = (bounds, setPlaces, setIsLoading, category) => {
    setIsLoading(true)
  axios
    .get(`https://travel-advisor.p.rapidapi.com/${category}/list-in-boundary`, {
      params: {
        bl_latitude: bounds.sw.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lng,
        tr_latitude: bounds.ne.lat,
      },
      headers: {
        "x-rapidapi-key": "3e06cd3365msh6d494af00c1fba7p1ef6d9jsn10062556f158",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    })
    .then((res) => {
      setPlaces(res.data);
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false)
    });
};

export const getWeather = (bounds, setWeather, setIsLoading) => {
    setIsLoading(true)
  axios
    .get("https://community-open-weather-map.p.rapidapi.com/find", {
      params: {
        lat: bounds.sw.lat,
        lon: bounds.ne.lng,
      },
      headers: {
        "x-rapidapi-key": "3e06cd3365msh6d494af00c1fba7p1ef6d9jsn10062556f158",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      },
    })
    .then((res) => {
      setWeather(res.data);
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err?.response?.data?.message);
      setIsLoading(false)
    });
};
