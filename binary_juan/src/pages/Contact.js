import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Contact extends Component {
    render(){
        return (
          <div>
            <h1>Contacto</h1>
            <p>Por acá me van a poder insultar.</p>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                <Form size="lg">
                  <FormGroup controlId="mail">
                    <FormLabel>Mail</FormLabel>
                    <FormControl
                      type="email"
                      placeholder="socomomoc@latinmail.com"
                    ></FormControl>
                  </FormGroup>
                  <FormGroup controlId="motivo">
                    <FormLabel>Motivo</FormLabel>
                    <FormControl as="select">
                      <option>no importa</option>
                      <option>yo veré</option>
                      <option>¿es que no se le puede hablar o qué?</option>
                      <option>hola</option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup controlId="mensaje">
                    <FormLabel>Hablalo</FormLabel>
                    <FormControl as="textarea" rows="5"></FormControl>
                  </FormGroup>
                  <FormGroup>
                    <Button variant="dark">Enviar</Button>
                  </FormGroup>
                </Form>
              </Col>
              <Col sm={3}></Col>
            </Row>
          </div>
        );
    }
}

export default withRouter(Contact);