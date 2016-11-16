import React, {Component} from 'react';
import Gravatar from 'react-gravatar';

class Avatar extends Component {
    render() {
        return (
                <Gravatar email="crow.mw@gmail.com" size={150} className="thumbnail img-responsive" style={{borderRadius: '50%', float:'right'}}/>
        );
    }
}

export default Avatar;