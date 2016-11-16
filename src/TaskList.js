import React, {Component} from 'react';

import Task from './Task';

class TaskList extends Component {
    handleRemoveTask(id){
        this.props.removeTask(id);
        return;
    }

    handleCompleteTask(id) {
        this.props.completeTask(id);
        return;
    }

    render() {
        return (
            <div>
                {this.props.tasks.map(function(task, index){
                    return (<Task 
                            key={index}
                            id={task.id}
                            time={task.time}
                            period={task.period}
                            activity_title={task.activity_title}
                            activity_description={task.activity_description} 
                            complete={task.complete}
                            removeTask={this.handleRemoveTask.bind(this)}
                            completeTask={this.handleCompleteTask.bind(this)}
                            />)
                }, this)}
            </div>
        );
    }
}

export default TaskList;