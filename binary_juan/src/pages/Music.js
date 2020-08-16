import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Music extends Component {
    render(){
        return (
          <div>
              <h1>Música</h1>
              <p>Ésta es la página para la music</p>
          </div>
        );
    }
}

export default withRouter(Music);