import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './styles/sass/main.scss'
import Training from './Pages/Training'
import About from './Pages/About'
import Nutrition from './Pages/Nutrition/Nutrition'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Vegan from './Pages/Nutrition/Vegan'
import Footer from './components/Footer'

const App = () => {

    return (
        <Router>
            <Navbar collapseOnSelect expand="md" variant="dark" className="sticky-top">
                <Container>
                    <Navbar.Brand href="/"><i className="fas fa-heartbeat"></i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/">Startseite</Nav.Link>
                            <Nav.Link href="/training">Training</Nav.Link>
                            <NavDropdown title="Ernährung" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/">Ernährungsbasics</NavDropdown.Item>
                                <NavDropdown.Item href="/nutrition">Wichtige Nährstoffe</NavDropdown.Item>
                                <NavDropdown.Item href="/">Rezepte</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/vegan">Veganismus</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/training" component={Training} />
                <Route path="/nutrition" component={Nutrition} />
                <Route path="/vegan" component={Vegan} />
            </Switch>
            <Footer></Footer>

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