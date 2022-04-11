import React, {useState} from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  const [input, setInput] = useState('')

  function submitCity(e) {
    e.preventDefault();
    if(!input) return alert('Escribe el nombre de una ciudad') 
    else {
      onSearch(input);
      setInput('');
    }
  }

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  return <form onSubmit={(e) => submitCity(e)} className={styles.bar}>
    <input onChange={(e) => onInputChange(e)} 
      value={input} type='text' className={styles.inputSearch} placeholder='Ciudad...'/>
    <input type='submit' value='Agregar' className={styles.btnSearch}/>
  </form>
};