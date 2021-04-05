import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

export default function WorkoutType({ workoutType, workouts, category }) {
    return (
        <section className="workout-type">
            <h2>{workoutType}</h2>
            <div className="workout-section">
                {workouts.map((workout => {
                    if (workout.category.includes('every') || workout.category.includes(category)) {
                        return (
                            <div className="single-workout">
                                <h5>{workout.title}</h5>
                                <YoutubeEmbed embedId={workout.url} />
                            </div>
                        )
                    } else return null
                }))}
            </div>
        </section>
    )
}
