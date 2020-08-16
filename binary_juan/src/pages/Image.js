import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Image extends Component {
    render(){
        return (
          <div>
              <h1>Imágen</h1>
              <p>Ésta es la página para las imágenes</p>
          </div>
        );
    }
}

export default withRouter(Image);