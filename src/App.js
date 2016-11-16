import React, { Component } from 'react';
import Moment from 'moment';
import './App.css';

import TaskList from './TaskList';
import Date from './Date';
import Avatar from './Avatar';
import AddButton from './AddButton';
import CreateTask from './CreateTask';

class App extends Component {
  constructor(){
    super();
    this.state = {
        tasks: [
            { 'id': '1', 'time': '12', 'period': 'AM', 'activity_title': 'Finish Tutorial Series', 'activity_description': '#ReactForNewbies', 'complete': 'false'}, 
            { 'id': '2', 'time': '9', 'period': 'AM', 'activity_title': 'Meeting with Team Leads', 'activity_description': 'New Project Kickoff', 'complete': 'false' }, 
            { 'id': '3', 'time': '11', 'period': 'AM', 'activity_title': 'Call Mom', 'activity_description': 'Return her call before she kills me', 'complete': 'false' }, 
            { 'id': '4', 'time': '3', 'period': 'PM', 'activity_title': 'Fix Wifey\'s website', 'activity_description': 'FB Ads Integration not working', 'complete': 'false' }, 
            { 'id': '5', 'time': '6', 'period': 'PM', 'activity_title': 'Do DB Backups', 'activity_description': 'Related to upcoming server migration', 'complete': 'false' }
        ],
        pageState: 'TaskList'
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.togglePageState = this.togglePageState.bind(this);
  }

  addTask(title, description, time){
    var task = {'time': time.format("h:MM"), 'period': time.format("A"), 'activity_title':title, 'activity_description':description};
    var tasks = this.state.tasks.concat(task);
    this.setState({tasks: tasks});
    this.togglePageState();
  }

  removeTask(id){
      var tasks = this.state.tasks;
      tasks = tasks.filter(function(task) {
          return task.id !== id;
      });
      this.setState({tasks});
      return;
  }

  completeTask(id){
      var tasks = this.state.tasks;
      for(var task in tasks){
          if(tasks[task].id === id) {
              tasks[task].complete = tasks[task].complete === 'true' ? 'false' : 'true';
              break;
          }
      }
      this.setState({tasks});
      return;
  }

  togglePageState(){
      var pageState = this.state.pageState;
      pageState = pageState === 'TaskList' ? 'CreateTask' : 'TaskList'
      this.setState({pageState});
      return;
  }

  render() {
    var content = <div>
                    <TaskList tasks={this.state.tasks} 
                            removeTask={this.removeTask} 
                            completeTask={this.completeTask}/>        
                    <br />
                    <AddButton onClick={this.togglePageState} />
                  </div>;
    if(this.state.pageState === 'CreateTask'){
        content = <CreateTask createTask={this.addTask} togglePageState={this.togglePageState}/>
    }

    return (
      <div style={{padding: '30px 30px'}}>
        <Avatar/>
        <Date />
        <br />
        {content}
      </div>
    );
  }
}

export default App;
