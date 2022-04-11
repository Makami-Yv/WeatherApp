import React, {useState} from 'react';
import './App.css';
import Cards from '../components/Cards/Cards.jsx';
import Nav from '../components/Nav/Nav';

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "051066c7ba44f1dd55be629b6b4cc27f"
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(respuesta => respuesta.json())
      .then((informacion) => {
        if(informacion.main !== undefined) {
          const nuevaCiudad = {
            min: Math.round(informacion.main.temp_min),
            max: Math.round(informacion.main.temp_max),
            img: informacion.weather[0].icon,
            id: informacion.id,
            temp: informacion.main.temp,
            name: informacion.name,
            weather: informacion.weather[0].main
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
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <div>
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
  );
}

export default App;
