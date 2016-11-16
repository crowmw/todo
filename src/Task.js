import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
    removeTask(e) {
        e.preventDefault();
        this.props.removeTask(this.props.id);
    }

    completeTask(e) {
        e.preventDefault();
        this.props.completeTask(this.props.id);
    }

    render() {
        var fontStyle = {color: 'black'}
        if(this.props.complete === 'true')
        {
            fontStyle = {color: 'lightgray'}
        }
        return (
            <div>
                <Row style={fontStyle}>
                    <Col xs={1}>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>{this.props.time}
                                <br />
                                <span>{this.props.period}</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <h4 id="activity-title">{this.props.activity_title}</h4>
                        <p>{this.props.activity_description}</p>
                    </Col>
                    <Col xs={1}>
                        <Row style={{paddingTop: '10px'}}>
                            <Col xs={6}>
                                <FontAwesome name='times' onClick={this.removeTask.bind(this)} style={{cursor: 'pointer'}}/>
                            </Col>
                            <Col xs={6}>
                                <FontAwesome name='check' onClick={this.completeTask.bind(this)} style={{cursor: 'pointer'}}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Task;