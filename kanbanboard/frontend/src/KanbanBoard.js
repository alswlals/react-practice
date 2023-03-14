import React, {useState} from 'react';
import styles from './assets/css/KanbanBoard.css';
import data from './assets/json/data.json';
import CardList from './CardList';
import update from 'react-addons-update';

const KanbanBoard = () => {
    const [cards, setCards] = useState(data)

    const changeTaskDone = function(cardNo, taskNo, done){
        // console.log(cardNo, taskNo, done);
        const cardIndex = cards.findIndex(card => card.no === cardNo);
        const taskIndex = cards[cardIndex].tasks.findIndex(task=> task.no === taskNo);
        // console.log(cardIndex, taskIndex);
       
        // cards[cardIndex].tasks[taskIndex].done = done;
        const newCards = update(cards, {
            [cardIndex]: {  // 변수를 뽑아놓은 거기 때문에 저렇게 써줘야 함 [cardIndex] -> 2. /ex06/04.js
                tasks: {
                    [taskIndex]: {
                        done: {
                            $set: done
                        }
                    }
                }
            }
        })

        setCards(newCards);
    }

    return (
        <div className={styles.KanbanBoard}>
            <CardList 
                key={'To Do'}
                title={'To Do'}
                cards={cards.filter(card => card.status === 'ToDo')}
                callback={changeTaskDone} />
            <CardList
                key={'Doing'}
                title={'Doing'}
                cards={cards.filter(card => card.status === 'Doing')}
                callback={changeTaskDone} />
            <CardList
                key={'Done'}
                title={'Done'}
                cards={cards.filter(card => card.status === 'Done')}
                callback={changeTaskDone} />
        </div>
    );
};

export default KanbanBoard;