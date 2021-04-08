import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

export default function WorkoutType({ workouts, category }) {
    return (
        <section className="workout-type">
            <div className="workout-section">
                {workouts.map((workout => {
                    if (workout.category.includes(category)) {
                        return (
                            <div className="single-workout">
                                <h5>{workout.title}</h5>
                                <YoutubeEmbed embedId={workout.video} />
                            </div>
                        )
                    } else return null
                }))}
            </div>
        </section>
    )
}
