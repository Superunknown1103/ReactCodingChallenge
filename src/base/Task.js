import React, { Component } from 'react';

class Task extends Component {
    render(){
        return (
            <li className="task">
                {this.props.Task.id}. {this.props.Task.description}
                </li>
        );
    }
}

export default Task;