import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import './App.css'
import Training from './Pages/Training'
import About from './Pages/About'
import Nutrition from './Pages/Nutrition'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <Router>
            <nav className="navbar">
                <h1 className="navbar-logo"><i className="fas fa-heartbeat"></i></h1>
                <ul className='nav-menu active'>
                    <li className="nav-links"><Link to="/">Home</Link></li>
                    <li className="nav-links"><Link to="/training">Training</Link></li>
                    <li className="nav-links"><Link to="/nutrition">Ernährung</Link></li>
                </ul>
            </nav>
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