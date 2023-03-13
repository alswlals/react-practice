import React, {Component, useRef} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {

    onScroll(e){
        console.log(this.outerRef.clientHeight, this.innerRef.clientHeight, this.outerRef.scrollTop)
    }
    render() {
        return (
            <div
                className={'App'}
                ref={ref => this.outerRef = ref}
                onScroll={this.onScroll.bind(this)}>
                {/* onScroll: this가 e안에서 이뤄지는 게 아니라 밖으로 빼야함 + bind 사용해줘야함 */}
                <div
                    ref={ ref => this.innerRef = ref }>
                    <ul>
                        {Array.from({length: 100}, (_, i) => i + 1).map(i =>
                            <li key={i}>
                                {`아이템 ${i} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}