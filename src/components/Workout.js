import React from 'react'
import { Card, Container } from 'react-bootstrap'
import YoutubeEmbed from './YoutubeEmbed'

export default function Workout({ workouts, category }) {
    return (
        <Container className="d-flex justify-content-around flex-wrap pt-4">
            {workouts.map((workout => {
                if (workout.category.includes(category)) {
                    return (
                        <Card className="video-card">
                            <h5>{workout.title}</h5>
                            <YoutubeEmbed embedId={workout.video} />
                        </Card>
                    )
                } else return null
            }))}
        </Container>
    )
}
