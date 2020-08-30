import React from 'react';
import './Styles.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Music from './pages/Music';
import Image from './pages/Image';
import Lyric from './pages/Lyric/LyricHome';
import Contact from './pages/Contact';
import About from './pages/About';

function Home(){
    return(
        <div className="Home">
            <BrowserRouter>
              <Container>
                  <NavBar/>
                  <Switch>
                      <Route exact path="/Music" render={() => <Music name="Música"/>}/>
                      <Route exact path="/Image" render={() => <Image name="Imágen"/>}/>
                      <Route exact path="/LyricHome" render={() => <Lyric name="Letras"/>}/>
                      <Route exact path="/About" render={() => <About name="Acerca"/>}/>
                      <Route exact path="/Contact" render={() => <Contact name="Conctacto"/>}/>
                  </Switch>
              </Container>
            </BrowserRouter>
        </div>
    );
}

export default Home;