import './App.css';
import SearchBox from './SearchBox';
import CurrentWeather from './CurrentWeather';
import Hourly from './Hourly';
import 'tachyons';
import { useState } from 'react';

function App() {
  const [cond, setCond] = useState({});
  const [hour, setHour] = useState({});
  const u1 ='https://i.pinimg.com/564x/54/0e/1b/540e1b9b20e16d1fca8ebfe0eb4a6b95.jpg';
  const u2 ='https://i.pinimg.com/564x/a5/ad/fe/a5adfed6d3793ae70ad66603f0482877.jpg';
  const u3 ='https://i.pinimg.com/564x/93/e5/4e/93e54e7ba94a463b41e8961b3984003d.jpg';
  const u4 = 'https://i.pinimg.com/564x/56/de/2c/56de2c51e107e656baf0677aae681976.jpg';
  const u = [u1,u2,u3,u4]
  const i1 = Math.floor(Math.random() * 4);
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
    <div className="tc App" style={{backgroundImage: `url(${u[i1]})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
      <SearchBox onValueChange={onHandleChange}/>
      {cond ? <CurrentWeather value={cond}/> : null}
      {hour ? <Hourly value={hour}/> : null}
    </div>
  );
}

export default App;
