import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class AddButton extends Component {
    handleClick(){
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}></Col>
                    <Col xs={2}>
                            <FontAwesome name="plus" onClick={this.handleClick.bind(this)} size="2x" style={{float: 'right', paddingTop: '10px', color: '#275c8b', cursor: 'pointer'}}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AddButton;