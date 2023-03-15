import React, {useState} from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description}) => {
    const [showDetail, setShowDetail] = useState(false);
    const [tasks, setTasks] = useState([]);

    const addTask = async (taskName) => {
        console.log(taskName)
    }

    return (
        <div className={styles.Card}>
            <div 
                className={
                    showDetail ? [styles.Card__Title,  styles.Card__Title__open].join(' ') :
                    styles.Card__Title
                }
                onClick={async () => {
                    if(!showDetail) {
                        try{
                        const response = await fetch(`/api/task?cardNo=${no}`, {
                            method: 'get',
                            headers: ''
                        });
                        } catch(err) {
                            console.log(err.message)
                        }
                    }
                    setShowDetail(!showDetail)
                }}> {title}
            </div>
            
            {
                showDetail ? 
                    <div className={styles.Card__Details}>
                        {description}
                        <TaskList cardNo={no} tasks={tasks} callbackAddTask={addTask} /> 
                    </div> : 
                    null
            }
        </div>
    );
};

export default Card;