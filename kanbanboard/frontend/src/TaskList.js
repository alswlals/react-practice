import React from 'react';
import Task from './Task'
import styles from './assets/css/TaskList.css'
const TaskList = ({tasks, callbackAddTask/** 지한테 쓰는 거  */, callbackChangeTaskDone /** 거쳐가는 용도 */}) => {

    return (
        <div>
            <ul>
                {
                    tasks.map(task => <Task 
                                        key={task.no} 
                                        no={task.no} 
                                        name={task.name} 
                                        done={task.done}
                                        callbackChangeTaskDone={callbackChangeTaskDone} />)
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