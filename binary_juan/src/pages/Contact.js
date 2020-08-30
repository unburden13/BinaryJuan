import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
    render(){
        return (
          <div>
              <h1>Contacto</h1>
              <p>Por esta página me van a poder insultar.</p>
          </div>
        );
    }
}

export default withRouter(Contact);