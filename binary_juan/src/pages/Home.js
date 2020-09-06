import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { juanCorazon } from './Image/images';
import Image from 'react-bootstrap/Image';

class Home extends Component{
    render(){
        return(
            <div className="HomeDivImage">
                <Image className="HomeImage" src={juanCorazon} fluid roundedCircle></Image>
            </div>
        );
    }
}

export default withRouter(Home);