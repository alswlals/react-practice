import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';
 
const App = () => {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            
            const response = await fetch('/api', {
                method: 'get',
                headers:{
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`)
            }
            setEmails(json.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchEmails()
    }, [])

    const addEmails = async (firstName, lastName, email) => {
        const newEmails = {
            no: null,
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        try {
            const response = await fetch(`/api`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmails)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
            setEmails([json.data, ...emails]);
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteEmails = async (no) => {
        console.log("dddddd", no)
        try {
            const response = await fetch(`/api/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
            const newEmails = emails.filter((email) => email.no !== no);
            setEmails(newEmails);
        } catch (error) {
            console.log(error.message)
        }
    }

    const notifyKeyWordChanges = async(keyword) => {
        try {
            const response = await fetch(`/api?kwd=${keyword}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setEmails(json.data);

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div id='App'className={'App'} >
            <RegisterForm 
                callbackAddEmails={addEmails} />
            <Searchbar 
                callbackKeyword={notifyKeyWordChanges}/>
            <Emaillist 
                emails={emails}
                callbackDeleteEmails={deleteEmails} />
        </div>
    );
} 

export default App;