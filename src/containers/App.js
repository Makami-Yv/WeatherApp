import React, {useState} from 'react';
import './App.css';
import Cards from '../components/Cards/Cards.jsx';
import Nav from '../components/Nav/Nav.jsx';
import About from '../components/About/About.jsx'
import {Route} from 'react-router-dom';
import Ciudad from '../components/Ciudad/Ciudad';

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "051066c7ba44f1dd55be629b6b4cc27f"
  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(respuesta => respuesta.json())
      .then((informacion) => {
        if(informacion.main !== undefined) {
          const nuevaCiudad = {
            min: Math.round(informacion.main.temp_min),
            max: Math.round(informacion.main.temp_max),
            img: informacion.weather[0].icon,
            id: informacion.id,
            wind: informacion.wind.speed,
            temp: informacion.main.temp,
            name: informacion.name,
            weather: informacion.weather[0].main,
            clouds: informacion.clouds.all,
            latitud: informacion.coord.lat,
            longitud: informacion.coord.lon
          }
          const ciudadEncontrada = cities.find(ciudad => ciudad.id === nuevaCiudad.id)
          if(ciudadEncontrada) return alert ('La ciudad ya está agregada.');
          else setCities(allCities => [...allCities, nuevaCiudad]);
        } else alert ('Ciudad no encontrada.')
      });
  }
  function onClose (id) {
    const ciudadFiltrada = cities.filter(ciudad => ciudad.id !== id)
    setCities(ciudadFiltrada)
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
      return ciudad[0];
    } else return null;
  }
  return (
    <div className="App">
      <Route
        path='/weatherapp/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route 
        path='/weatherapp/about'
        component={About}
      />
      <Route exact path='/weatherapp/'>
        <Cards cities={cities} onClose={onClose}/>
      </Route>
      <Route exact path='/weatherapp/ciudad/:ciudadId'
      render = {({match}) => <Ciudad city = 
      {onFilter(match.params.ciudadId)}/>} />
    </div>
  );
}

export default App;
