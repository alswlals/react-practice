import React from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';
import emails from './assets/json/data.json'

 
export default function App(props) {
    return (
        <div id='App'className={'App'} >
            <RegisterForm />
            <Searchbar />
            <Emaillist
                emails={emails} />
        </div>
    );
} 

