import React from 'react';
import './Styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AnimationExample} from './Animation';

function Home(){
    return(
        <div className="Home">
            <Container>
                <Row>
                    <Col>Música</Col>
                    <Col>Imágen</Col>
                    <Col>Letras</Col>
                    <Col>Acerca</Col>
                    <Col xs={6}>Acerca</Col>
                    <Col xs={1}><a href="x">YT</a> </Col>
                    <Col xs={1}><a href="sc">SC</a> </Col>
                </Row>
            </Container>
            <Container>
                <AnimationExample 
                    name="example" 
                    background="#fe3"
                />
            </Container>
        </div>
    );
}

export default Home;