import React from 'react';

export default function App(props) {
    const h1style = {
        backgroundColor: '#eeff99',
        width:200,
        height:100,
        padding: 20,
        color:'#22222' 
    }
    return (
        <div id='App'>
            <h1 style={h1style}>Inline Styling</h1>
        </div>
    );
} 

