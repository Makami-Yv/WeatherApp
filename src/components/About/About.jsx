import React, { Fragment } from 'react';
import styles from './About.module.css';

export default function About() {
    return <div className={styles.container}>
        <div className={styles.contCard}>
            <h1>Weather App.</h1>
            <h3>Aplicación hecha con React por Erick Ramírez Rodas.</h3>
            <p>
                Esta aplicación es parte de un ejercicio de práctica para asimilar mis conocimientos recién adquiridos
                usando React, para continuar con mi aprendizaje en desarrollo web, esta vez centrado principalmente en 
                Front-end y pidiendo la información desde <a href='https://openweathermap.org/'> Weather API</a>
            </p>
        </div>
    </div>
}