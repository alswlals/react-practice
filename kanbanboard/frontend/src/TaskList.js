import React from 'react';
import Task from './Task'
import styles from './assets/css/TaskList.css'
const TaskList = ({cardNo, tasks, callbackAddTask}) => {

    return (
        <div>
            <ul>
                {
                    tasks.map(task => <Task 
                                        key={task.no} 
                                        no={task.no} 
                                        cardNo={cardNo}
                                        name={task.name} 
                                        done={task.done} />)
                }
            </ul>
            <input 
                type='text' 
                placeholder={'Add Task'} 
                className={styles.TaskList__add_task} 
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        callbackAddTask(e.target.value);
                    }
                }} />
        </div>
    );
};

export default TaskList;