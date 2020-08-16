import React from 'react';
import './Styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AnimationExample, PointerExample, ToneExample} from './Animation';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Music from './pages/Music';
import Image from './pages/Image';

function Home(){
    return(
        <div className="Home">
            <BrowserRouter>
              <Container>
                  <NavBar/>
                  <Switch>
                    <Route exact 
                      path="/Music"
                      render={() => <Music name="Música"/>}/>
                    <Route exact 
                      path="/Image"
                      render={() => <Image name="Imágen"/>}/>
                    </Switch>
              </Container>
            </BrowserRouter>

            <Container>
                <Row>
                    <Col>Música</Col>
                    <Col>Imágen</Col>
                    <Col>Letras</Col>
                    <Col>Acerca</Col>
                    <Col xs={6}>Contacto</Col>
                    <Col xs={1}><a href="x">YT</a> </Col>
                    <Col xs={1}><a href="sc">SC</a> </Col>
                </Row>
            </Container>
            <Container>
                <AnimationExample 
                    name="example" 
                    background="#fe3"
                />
                <PointerExample name="pointer"/>
                <ToneExample name="tone"/>
            </Container>
        </div>
    );
}

export default Home;