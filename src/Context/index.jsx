import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [place, setPlace] = useState('Kathmandu');
    const [thisLocation, setLocation] = useState('');

    useEffect(() => {
        fetchWeather();
    }, [place]);
          
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(`${latitude},${longitude}`);
            }, () => {
                fetchWeather();
            });
        } else {
            fetchWeather();
        }
    }, []);
   
    const fetchWeather = async (location) => {
        const query = location || place;
        const options = {
            method: 'GET',
            url: `http://api.weatherapi.com/v1/current.json?key=ad3414c3ca22442488b44752240207&q=${query}&aqi=no`
        };

        try {
            const response = await axios.request(options);
            const data = response.data;
            setLocation(data.location.name);
            setWeather(data.current);
        } catch (e) {
            console.error(e);
            alert('This place does not exist');
        }
    };

    

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
