import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0); //10의 배수일 때 없어지게 함
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());  
            setTicks((ticks) => ticks+1);
        }, 1000);
        return (function(){
            clearInterval(timerID);
        });   
    }, [])

    return (
        <div>
            <span>{ticks}</span>
            
            {
                ticks % 10 === 0 ? 
                null :
                <Clock 
                        hours={date.getHours()}
                        minutes={('0'+date.getMinutes()).slice(-2)}
                        seconds={('0'+date.getSeconds()).slice(-2)} />
                }
        </div>
    );
}