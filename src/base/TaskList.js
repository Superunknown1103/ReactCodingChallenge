 import React, { Component } from 'react';

 class TaskList extends Component {
     render() {
         console.log(this.props);
         return (
             <div className="taskList">
                 Here are your tasks:
                 </div>
         );
     }
 }

 export default TaskList;
