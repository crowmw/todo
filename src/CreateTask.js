import React, {Component} from 'react';
import {Row, Col, ControlLabel} from 'react-bootstrap';
import TimePicker from 'rc-time-picker';
import Moment from 'moment';
import FontAwesome from 'react-fontawesome';
import 'rc-time-picker/assets/index.css';

class CreateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            time: Moment()
        }

        this.timeChange = this.timeChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.createTask = this.createTask.bind(this);
        this.backToList = this.backToList.bind(this);
    }
    timeChange(time){
        this.setState({time: time});
    }

    titleChange(e){
        e.preventDefault();
        this.setState({title: e.target.value});
    }

    descriptionChange(e){
        e.preventDefault();
        this.setState({description: e.target.value});
    }

    createTask(e){
        e.preventDefault();
        this.props.createTask(this.state.title, this.state.description, this.state.time);
    }

    backToList(){
        this.props.togglePageState();
    }

    render() {
        return (
            <div>
            <Row style={{paddingTop: '10px'}}>
            <Col xs={1}></Col>
            <Col xs={10}>
                <ControlLabel>Tytuł</ControlLabel>
                <input className="form-control" onChange={this.titleChange} />
            </Col>
            <Col xs={1}></Col>
            </Row>
            <Row style={{paddingTop: '10px'}}>
            <Col xs={1}></Col>
            <Col xs={10}>
                <ControlLabel>Opis</ControlLabel>
                <input className="form-control" onChange={this.descriptionChange}/>
            </Col>
            <Col xs={1}></Col>
            </Row>
            <Row style={{paddingTop: '10px'}}>
            <Col xs={1}></Col>
            <Col xs={10}>
                <ControlLabel>Godzina</ControlLabel><br />
                <TimePicker style={{width: '100%'}} showSecond={true} defaultValue={Moment()} onChange={this.timeChange.bind(this)} />
            </Col>    
            <Col xs={1}></Col>
            </Row>
            <Row style={{paddingTop: '10px'}}>
                <Col xs={2}>
                    <FontAwesome name="arrow-left" onClick={this.backToList} size="2x" style={{float: 'right', paddingTop: '10px', color: '#275c8b', cursor: 'pointer'}}/>
                </Col>
                <Col xs={8}></Col>
                <Col xs={2}>
                        <FontAwesome name="plus" onClick={this.createTask} size="2x" style={{float: 'right', paddingTop: '10px', color: '#275c8b', cursor: 'pointer'}}/>
                </Col>
            </Row>
            </div>
        );
    }
}

export default CreateTask;