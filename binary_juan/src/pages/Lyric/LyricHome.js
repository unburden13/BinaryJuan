import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BusNacional, MananaArrastra } from './LyricContent';
import './LyricStyles.css';

class Lyric extends Component {
    render(){
        return (
          <div>
            <h1>Letras</h1>
            <p>Símbolos del alfabeto latino ordenadas premeditadamente.</p>

            <Tab.Container id="left" defaultActiveKey="x">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="1">
                        Bus Nacional
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2" className="nav-link-custom">
                        Mañana Arrastra
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={3}>
                  <Tab.Content>
                    <Tab.Pane eventKey="1">
                      <BusNacional />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <MananaArrastra />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        );
    }
}

export default withRouter(Lyric);