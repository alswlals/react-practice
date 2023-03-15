import React from 'react'
import styles from './assets/css/Searchbar.css'
 const Searchbar = ({callbackKeyword}) => {
  return (
    <div className={styles.Searchbar}>
        <input type="text" placeholder="serach" onChange={e => callbackKeyword(e.target.value.toLowerCase())} />
         
    </div>
  )
}
export default Searchbar