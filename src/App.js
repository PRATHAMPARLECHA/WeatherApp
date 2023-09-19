import './App.css';
import SearchBox from './SearchBox';
import CurrentWeather from './CurrentWeather';
import Hourly from './Hourly';
import 'tachyons';
import { useState } from 'react';

function App() {
  const [cond, setCond] = useState({});
  const [hour, setHour] = useState({});
   const onHandleChange = async(e) => {
    if(e.which === 13){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=92318fb9cf82d8f3c0e07a15ee72fd4a&units=metric`)
      .then(res => res.json())
      .then(result => {
        setCond(result)
        console.log(result)
      })
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e.target.value}&&appid=92318fb9cf82d8f3c0e07a15ee72fd4a&units=metric`)
      .then(response => response.json())
      .then(res => {
        setHour(res)
        console.log(res)
      })
    e.target.value='';
    }
  }
  return (
    <div className="tc">
      <SearchBox onValueChange={onHandleChange}/>
      {cond ? <CurrentWeather value={cond}/> : null}
      {hour ? <Hourly value={hour}/> : null}
    </div>
  );
}

export default App;
