import React, {Component} from 'react';

import Task from './Task';

class TaskList extends Component {
    handleRemoveTask(){
        this.props.removeTask.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.tasks.map(function(task, index){
                    return <Task 
                            key={index}
                            time={task.time}
                            period={task.period}
                            activity_title={task.activity_title}
                            activity_description={task.activity_description} 
                            removeTask={this.handleRemoveTask.bind(this)}
                            />
                })}
            </div>
        );
    }
}

export default TaskList;