import React from 'react';
import './Styles.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './pages/Home';
import Music from './pages/Music';
import ImagePage from './pages/Image/ImagePage';
import Lyric from './pages/Lyric/LyricHome';
import Contact from './pages/Contact';
import About from './pages/About';

function App(){
    return (
      <div className="App">
        <BrowserRouter>
          <Container>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/Home"
                render={() => <Home name="Casa" />}
              />
              <Route
                exact
                path="/Music"
                render={() => <Music name="Música" />}
              />
              <Route
                exact
                path="/Image"
                render={() => <ImagePage name="Imágen" />}
              />
              <Route
                exact
                path="/LyricHome"
                render={() => <Lyric name="Letras" />}
              />
              <Route
                exact
                path="/About"
                render={() => <About name="Acerca" />}
              />
              <Route
                exact
                path="/Contact"
                render={() => <Contact name="Conctacto" />}
              />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    );
}

export default App;