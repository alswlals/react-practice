import React from 'react';
import styles from './assets/css/Emaillist.css';

 const Email = ({no, firstName, lastName, email, callbackDeleteEmails}) => {
  return (
    <li className={styles.Email}>
       {firstName} {lastName}
        <br/>
        {email}
        <a href='' onClick={() =>callbackDeleteEmails(no)} />
    </li>
  )
}
export default Email
