import React, { useState } from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';
import data from './assets/json/data.json'

 
export default function App(props) {
    const [emails, setEmails] = useState(data);
    const notifyKeyWordChanged = function(keyword){
        /** keyword가 firstName or lastName or email */
        const emails = data.filter(email => email.firstName.includes(keyword) || email.lastName.includes(keyword) || email.email.includes(keyword));
        setEmails(emails);
    }

    return (
        <div id='App'className={'App'} >
            <RegisterForm />
            <Searchbar callback = {notifyKeyWordChanged} />
            <Emaillist emails={emails} />
        </div>
    );
} 

