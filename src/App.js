import './App.css';
import SearchBox from './SearchBox';
import CurrentWeather from './CurrentWeather';
import 'tachyons';
import { useState } from 'react';

function App() {
  const [cond, setCond] = useState({});
  //const [error, setError] = useState('');
   const onHandleChange = async(e) => {
    if(e.which === 13){
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${e.target.value}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f8d3e181d7msh6baccacb103e797p17b72ejsn4276367e6735',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCond(result)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    e.target.value='';
    }
  }
  return (
    <div className="tc">
      <SearchBox onValueChange={onHandleChange}/>
      {cond ? <CurrentWeather value={cond}/> : null}
    </div>
  );
}

export default App;
