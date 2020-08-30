import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class About extends Component {
    render(){
        return (
          <div>
              <h1>Acerca</h1>
              <p>En ésta página voy a poner mi carta astral.</p>
          </div>
        );
    }
}

export default withRouter(About);