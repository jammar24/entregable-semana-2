import './App.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import WeatherCard  from './components/WeatherCard'
import BoxVideo from './components/BoxVideo'



function App() {

const [coords, setCoords] = useState()
const [weather, setWeather] = useState()
const [temperature, setTemperature] = useState()
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const success = pos => {

    const obj = {    
    lat: pos.coords.latitude,
    lon: pos.coords.longitude
  }
   setCoords(obj)
  }
  navigator.geolocation.getCurrentPosition(success)
}, [])

useEffect(() => {
  if (coords){
    const APIkey= 'a041a7628b57a12a3751e5fe2f6e1269'
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`
      axios.get(url)
      .then ( res => {       
       setWeather( res.data )
       const obj = {
          celsius: (res.data.main.temp -273.15).toFixed(1),
          farenheit:((res.data.main.temp -273.15 ) * 9/5 + 32 ).toFixed(1)
      }
      setTemperature(obj)
     })
     .catch (err =>console.log (err))
     .finally(( ) =>  setIsLoading (false))
  }
}, [coords])
 

  return (
    <>
    <div>
        <BoxVideo/>
    </div>
    
    <div className="App">
     { 
      isLoading ?
         <h1 className='App__box'>< i className='bx bx-loader-circle bx-spin'></i></h1>
      :
        <WeatherCard 
          weather ={weather}
          temperature={temperature}
        />
      }
    </div>
    </>
  )
}

export default App
