import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import img from '../../img/lluvioso.png';
import {Link} from 'react-router-dom'

export default function Nav({onSearch}) {
    
    return <nav className={styles.navigation}>
        <Link to='/weatherapp/'>
            <div className={styles.logo}>
                <img src={img} className={styles.bounce} alt='WeatherAppLogo'/>
                <span>Weather-App</span>
            </div>
        </Link>
        <Link to='/weatherapp/about'>
            <span>About</span>
        </Link>
        <SearchBar onSearch={onSearch}/>
    </nav>
}