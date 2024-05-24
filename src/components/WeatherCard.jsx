import './weatherCard.css'
import { useState } from "react"

const WeatherCard = ({weather, temp}) => {

    const [isCelsius, setIsCelcsius] = useState(true)

    function changerTempperatura(){
        setIsCelcsius(!isCelsius)
    }
    
  return (
    <article className='card'>
        <h2 className='card__h2'>{weather?.name}, {weather?.sys.country}</h2>
        <section>
            <div>
                <img className='card__img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </div>
        </section>
        <section className='card__data'>
            <h3 className='text'>{weather?.weather[0].description}</h3>
                <div>Wind Speed <strong className='data__text'>{weather?.wind.speed} </strong>Mt/s</div>
                <div>Direction Wind <strong className='data__text'> {weather?.wind.deg}</strong>°</div>
                <div>Clouds <strong className='data__text'> {weather?.clouds.all}</strong> %</div>
                <div>Pressure <strong className='data__text'> {weather?.main.pressure}</strong> hPa</div>
        </section>
        <section className='card__info'>
            <h2>{ isCelsius ? ` ${temp?.celsius}°C` : `${temp?.fahrebheit} °F` }</h2>

            <button onClick={changerTempperatura}>Change to {isCelsius ? '°F' : '°C' }</button>
        </section>
    </article>
  )
}

export default WeatherCard