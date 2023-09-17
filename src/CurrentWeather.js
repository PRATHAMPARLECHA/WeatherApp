import React from "react";

const CurrentWeather = ({ value })=> {
    return ( 
        <div>
            {value.location && value.current ?
            (
                <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                    <p>location: {value.location ? value.location.name : null}</p>
                    <p>Condition: {value.current ? value.current.condition.text : null}</p>
                    <img src={`${value.current.condition.icon}`} alt="weather-icon"/>
                    <p>Temperature: {value.current ? `${value.current.temp_c}°C` : null}</p>
                    <p>FeelsLke: {value.current ? value.current.feelslike_c : null}</p>
                    <p>Humidity: {value.current ? value.current.humidity : null}</p>
                    <p>Pressure: {value.current ? value.current.pressure_mb : null}</p>
                </div>
            ):null}
        </div>
    );
}

export default CurrentWeather;