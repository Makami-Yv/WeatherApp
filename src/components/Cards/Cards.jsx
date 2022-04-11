import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards({cities, onClose}) {
  if(cities.length > 0) {
    return <div className={styles.container}>
      {cities.map(city => 
        <Card       
            key={city.id}   
            temp={city.temp} 
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            id={city.id}
            onClose={() => onClose(city.id)}
        ></Card>
      )}
    </div>
  } else {
      return <div className={styles.blanc}>
        <p>Sin ciudades</p>
      </div>
  }
};