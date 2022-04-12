import React from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card(props) {
  let img = 'http://openweathermap.org/img/wn/' + props.img + '@2x.png';
  return <div className={styles.container}>
    <div className={styles.city}>
      <button onClick={props.onClose}>X</button>
      <Link to={`/ciudad/${props.id}`}>
        <h1>{props.name}</h1>
      </Link>
    </div>
    <div className={styles.actual}>
      <p>Temp. Actual:</p>
      <p>{props.temp} °C</p>
    </div>
    <div className={styles.info}>
        <div className={styles.min}>
          <p>Mínima:</p>
          <p>{props.min} °C</p>
        </div>
        <div className={styles.max}>
          <p>Máxima:</p>
          <p>{props.max} °C</p>
        </div>
      <img src={img} alt='weather img'/>
    </div>
  </div>
};