import React, { Component } from 'react';

class Task extends Component {
    render(){
        return (
            <ol className="task">
                {this.props.Task.id}. {this.props.Task.description}
            </ol>
        );
    }
}

export default Task;