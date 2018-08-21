import React, { Component } from 'react';

class Task extends Component {
    state = { edit: false }

    renderTaskDescription = (description) => {
        return JSON.stringify(description);
    }

    render(){
        const { task: { _id: id, task: description} } = this.props;
        const { edit } = this.state;
        console.log('asdasd', this.props);
        return (
            <span>
                { edit && <input value={this.renderTaskDescription(description)} /> }
                { !edit && (
                    <ol className="task" onClick={ ()=> { this.props.changeTask('newValue', this.props.task._id); this.setState({ edit: true }) } }>
                        {id}{': '}{this.renderTaskDescription(description)}
                    </ol>
                )}
            </span>
        );
    }
}

export default Task;
