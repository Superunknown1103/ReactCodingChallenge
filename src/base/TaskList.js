 import React, { Component } from 'react';
 import { connect } from "react-redux";
 import Task from '../base/Task';

 class TaskList extends Component {
     render() {
        const { tasks } = this.props;
        console.log(this.props);

        if (tasks) {
            return (
                <div className="taskList">
                    Here are your tasks:
                    { tasks.map(task => <Task key={task._id} task={task} />) }
                </div>
            );
        }

        return null;
     }
 }


const mapStateToProps = state => ({
  errors: state.errors,
  tasks: state.data.data,
});

export default connect(
  mapStateToProps,
)(TaskList);
