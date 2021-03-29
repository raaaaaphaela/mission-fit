import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { workouts } from './workouts'
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed'
import './App.css'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlists';

const YT_API_KEY = 'AIzaSyAIGseZ0gYwvSj7BEx1SMrUNCnk4LQKrmQ'

// async function getServerSideProps() {
//     const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&id=PLsEnDwVEHwamZ5jX6X9yFeK3VpEyNzVbp&key=${YT_API_KEY}`)
//     const data = await res.json();


//     return {
//         props: {
//             data
//         }
//     }
// }

const App = () => {

    return (
        <div>
            <Navbar />
            <h1 id="heading">Workout</h1>

            <section className="workout-container">
                <h2>Oberkörper</h2>
                <div className="workout-section">
                    {workouts.map((workout => {
                        if (workout.category.includes('every') || workout.category.includes('upper')) {
                            return (
                                <div className="single-workout">
                                    <h1>{workout.title}</h1>
                                    <YoutubeEmbed embedId={workout.url} />
                                </div>
                            )
                        }
                    }))}
                </div>
            </section>
            <section className="workout-container">
                <h2>Beine</h2>
                <div className="workout-section">
                    {workouts.map((workout => {
                        if (workout.category.includes('every') || workout.category.includes('legs')) {
                            return (
                                <div className="single-workout">
                                    <h1>{workout.title}</h1>
                                    <YoutubeEmbed embedId={workout.url} />
                                </div>
                            )
                        }
                    }))}
                </div>
            </section>

        </div>)
}

export default App