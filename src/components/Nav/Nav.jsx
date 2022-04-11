import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import img from '../../img/lluvioso.png';

export default function Nav({onSearch}) {
    
    return <nav className={styles.navigation}>
        <div className={styles.logo}>
            <img src={img} className={styles.bounce} alt='WeatherAppLogo'/>
            <h1>Weather-App</h1>
        </div>
        <SearchBar onSearch={onSearch}/>
    </nav>
}