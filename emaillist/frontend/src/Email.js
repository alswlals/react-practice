import React from 'react';
import styles from './assets/css/Emaillist.css';

 const Email = ({no, firstName, lastName, email}) => {
  return (
    <li className={styles.Email}>
       {firstName} {lastName}
        <br/>
        {email}
        <a href='' />
    </li>
  )
}
export default Email
