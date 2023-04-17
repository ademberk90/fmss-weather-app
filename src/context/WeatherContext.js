import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import { useCity } from "./CityContext";
import cities from "../helpers/cities";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
    const [weather, setWeather] = useState();

    const { cityId } = useCity();

    const values = {
        weather,
        setWeather,
    }

    useEffect(() => {
        const getWeather = async (cityId) => {
            const key = process.env.REACT_APP_WEATHER_API_KEY;
            const city = cities.find(item => item.id == cityId);
            console.log(city);
            try { 
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${key}`
                const { data } = await axios.get(url);
                console.log(data);
                setWeather(data);
            } catch{
                console.log('API ERROR');
            }
        }
        cityId && getWeather(cityId);       
    }, [cityId])

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )

}

const useWeather = () => useContext(WeatherContext);

export { WeatherProvider, useWeather }