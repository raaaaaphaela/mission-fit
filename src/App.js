import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Training from './Pages/Training'
import About from './Pages/About'

const App = () => {
    const legWorkout = 'legs';
    const upperWorkout = 'upper';

    return (
        <Router>
            <div>
                <Navbar />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/training">Training</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/" exact component={About} />
                <Route path="/training" component={Training} />
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