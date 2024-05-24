import { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard.jsx'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()




  //esto es asincrono.// yo dependo de la latitud para hacer la peticion a la 
  //api del clima
  useEffect(()=>{

    function success(pos){
      // console.log(pos)
      setCoords({lat: pos.coords.latitude, lon: pos.coords.longitude})
    }

    //recibe tres parametros. el primero es obligatorio.
    // success es como then y error como un catch
    const geo_posocion =  navigator.geolocation.getCurrentPosition(success);
  }, [])



  useEffect(()=>{
    // solo quier se ejecute cuando cambie coords y no al nacer
    if(coords){
      const api_key = 'bd8b734d02403f4f88dd3958a1758135';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${api_key}`
      axios.get(url).then((res) => {

        setWeather(res.data);
        const celsius = (res.data.main.temp - 273.15).toFixed(1);
        const fahrebheit = (celsius * 9/5 + 32).toFixed(1);
        setTemp({celsius, fahrebheit})
      })
      .catch(err => console.log(err));

    }

  },[coords])

  console.log(weather)


  return (
    <>
      <div className='container__app'>
        {
          weather ? <h1>Weather App</h1> :<h3>Por Favor Habilita EL Permiso de Ubicacion</h3>
        }
        <WeatherCard 
          weather={weather}
          temp={temp}
        />
      </div>
    </>
  )
}

export default App
