 import React, { Component } from 'react';
 import Task from '../base/Task';
 class TaskList extends Component {
     render() {
        let tasks;
        if (this.props.tasks){
            tasks = this.props.tasks.map(task => {   
            return (
                <Task Task={task} />
            )
            })
        }
         return (
             <div className="taskList">
                 Here are your tasks:
                 {tasks}
                 </div>
         );
     }
 }

 export default TaskList;
