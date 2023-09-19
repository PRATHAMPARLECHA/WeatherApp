import React from "react";
import { DateTime } from "luxon";


const CurrentWeather = ({ value })=> {
    const formatTolocalTime = (sec,zone,format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromMillis(sec*1000).setZone(zone).toFormat(format)
    return ( 
        <div>
            {value.name  ?
            (
                <div>
                    <div className="br2 ba dark-gray b--black-10 mv4  w-50-m w-25-l mw5 center white bg-mid-gray">
                        <p>location: {value.name ? value.name : null}</p>
                        <p>Description: {value.weather[0] ? value.weather[0].description : null}</p>
                        <p>{value.dt && value.timezone ? formatTolocalTime(value.dt,value.timezone, "cccc"): null}</p>
                        <img src={`http://openweathermap.org/img/wn/${value.weather[0].icon}.png`} alt="icon"/>
                        <p>Temperature: {value.main ? `${value.main.temp}°C` : null}</p>
                        <p>Humidity: {value.main ? value.main.humidity : null}</p>
                        <p>Pressure: {value.main ? value.main.pressure : null}</p>
                        <p>Feels_like: {value.main ? value.main.feels_like : null}</p>
                    </div>
                </div>
            ):null}
        </div>
    );
}

export default CurrentWeather;