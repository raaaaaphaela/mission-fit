import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import './App.css'
import Training from './Pages/Training'
import About from './Pages/About'
import Nutrition from './Pages/Nutrition'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const App = () => {

    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><i className="fas fa-heartbeat"></i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/">Startseite</Nav.Link>
                            <Nav.Link href="/training">Training</Nav.Link>
                            <NavDropdown title="Ernährung" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/nutrition">Übersicht</NavDropdown.Item>
                                <NavDropdown.Item href="/">Ernährungsbasics</NavDropdown.Item>
                                <NavDropdown.Item href="/">Rezepte</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Gute Gründe</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/training" component={Training} />
                <Route path="/nutrition" component={Nutrition} />
            </Switch>

        </Router>
    )
}

export default App

// TODO: ggf. später die Playlist laden und als Liste ausgeben
// const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlists';

// const YT_API_KEY = 'AIzaSyAIGseZ0gYwvSj7BEx1SMrUNCnk4LQKrmQ'

// async function getServerSideProps() {
//     const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&id=PLsEnDwVEHwamZ5jX6X9yFeK3VpEyNzVbp&key=${YT_API_KEY}`)
//     const data = await res.json();


//     return {
//         props: {
//             data
//         }
//     }
// }