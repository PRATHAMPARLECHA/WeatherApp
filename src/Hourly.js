import React, { useState } from "react";
import { DateTime } from "luxon";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import './Hourly.css';

const Hourly = ({ value }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleAccordionClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
    const formatTolocalTime = (sec,zone,format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromMillis(sec*1000).setZone(zone).toFormat(format)
    return (
        // <div>
        //     {value.city ? (
        //         <div>
        //             <div className="flex flex-wrap justify-between">
        //                 {value.list ? value.list.map((data,i)=>{
        //                     if(i >= 8 && i%8 === 0){
        //                         return (
        //                         <div key={i} className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        //                             <p>{data.dt && value.city ? formatTolocalTime(data.dt,value.city.timezone, "ccc"): null}</p>                 
        //                             <p>Description: {data.weather[0] ? data.weather[0].description :null}</p>
        //                             <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icons"/>
        //                             <p>Temperature: {data.main ? data.main.temp : null}</p>
        //                             <p>Humidity: {data.main ? data.main.humidity : null}</p>
        //                             <p>Pressure: {data.main ? data.main.pressure : null}</p>
        //                             <p>Feels_like: {data.main ? data.main.feels_like : null}</p>
        //                         </div>
        //                         )
        //                     }
        //                 }) : null}
        //             </div>
        //         </div>
        //     ): null}
        // </div>
        <div>
      {value.city ? (
        <Accordion className="flex spacing">
          {value.list ? value.list.map((data, i) => {
            if (i >= 8 && i % 8 === 0) {
              return (
                <AccordionItem key={i} className={`weather-card ${expandedIndex === i ? 'expanded' : ''} ml3 mr3 bg-mid-gray white pa4`} onClick={() => handleAccordionClick(i)}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <p>{data.dt && value.city ? formatTolocalTime(data.dt, value.city.timezone, "cccc") : null}</p>
                      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icons" />
                      <p>{data.main ? `${data.main.temp}°C` : null}</p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {expandedIndex === i && (
                    <AccordionItemPanel>
                      <div>
                        <p>Description: {data.weather[0] ? data.weather[0].description : null}</p>
                        <p>Humidity: {data.main ? data.main.humidity : null}</p>
                        <p>Pressure: {data.main ? data.main.pressure : null}</p>
                        <p>Feels_like: {data.main ? data.main.feels_like : null}</p>
                      </div>
                    </AccordionItemPanel>
                  )}
                </AccordionItem>
              )
            } else {
              return null;
            }
          }) : null}
        </Accordion>
      ) : null}
    </div>
    );
}

export default Hourly;