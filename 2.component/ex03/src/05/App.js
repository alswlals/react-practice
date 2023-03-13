import React, { useRef } from 'react';
import '../assets/scss/App.scss';

export default function App() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    console.log(Array.from({length:5}, (_, i) => i*i ));

    return (
        <div
            ref={outerRef}
            className={'App'}
            onScroll={e=>{
                console.log(outerRef.current.clientHeight, innerRef.current.clientHeight, outerRef.current.scrollTop)
            // current 사용이유 -> 지금 활성화되어 있는 Element가 뭐다. 하고 명시해주기 위해
            }}>
            <div
                ref={ innerRef }>
                <ul>
                    { Array.from({length: 100}, (_, i) => i+1).map(i =>
                        <li key={i}>
                            { `아이템 ${i} 입니다.` }
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}