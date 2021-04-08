import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './styles/scss/main.scss'
import Training from './components/Pages/Training'
import Nutrition from './components/Pages/Nutrition'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Vegan from './components/Pages/Vegan'
import Footer from './components/Footer'
import NutrientsPage from './components/Pages/NutrientsPage'
import AuthContext from './context/AuthContext'
// import Signup from './components/Pages/SignUp'
import Login from './components/Pages/Login'
import Dashboard from './components/Pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import ForgotPasswort from './components/Pages/ForgotPasswort'
import UpdateProfile from './components/Pages/UpdateProfile'

const App = () => {

    return (
        <Router>
            <AuthContext>
                <Navbar collapseOnSelect expand="md" variant="dark" className="sticky-top">
                    <Container>
                        <Navbar.Brand href="/"><i className="fas fa-heartbeat"></i></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"></Nav>
                            <Nav>
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/training">Training</Nav.Link>
                                <NavDropdown title="Ernährung" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/">Ernährungsbasics</NavDropdown.Item>
                                    <NavDropdown.Item href="/nutrients">Wichtige Nährstoffe</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Rezepte</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/vegan">Veganismus</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Switch>
                    <PrivateRoute path="/" exact component={Dashboard} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    {/* <Route path="/signup" component={Signup} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPasswort} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <Route path="/training" component={Training} />
                    <Route path="/nutrition" component={Nutrition} />
                    <Route path="/nutrients" component={NutrientsPage} />
                    <Route path="/vegan" component={Vegan} />
                </Switch>

                <Footer></Footer>
            </AuthContext>

        </Router>
    )
}

export default App