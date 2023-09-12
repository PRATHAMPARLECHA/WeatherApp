import './App.css';
import 'tachyons';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=92318fb9cf82d8f3c0e07a15ee72fd4a`
  
  const onSearchChange = (event) => {
    if(event.which === 13){
      axios.get(url).then(res => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }
  }
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 measure tc">
      <input type='text' placeholder='search country' value={location} className='ba b--gray br4 f3' onChange={event => setLocation(event.target.value)} onKeyPress={onSearchChange} />
      <p>Country: {data.name}</p>
      {data.main ? <p>Temperature:{data.main.temp}</p> : null}
      {data.weather ? <p>{data.weather[0].main}</p> : null}
      {data.main ? <p>Feels: {data.main.feels_like}</p> : null}
      {data.main ? <p>Humidity:{data.main.humidity}</p> : null}
      {data.main ? <p>Pressure:{data.main.pressure}</p> : null}
      {data.wind ? <p>Wind Speed: {data.wind.speed}</p> : null}
    </article>
  );
}

export default App;
