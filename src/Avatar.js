import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={9}></Col>
                    <Col xs={3}>
                        <Image src="https://dl.dropboxusercontent.com/u/26425880/crow.jpg" thumbnail circle />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Avatar;