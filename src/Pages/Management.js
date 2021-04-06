import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import Header from '../components/Header'
import WorkoutInput from '../components/WorkoutInput'
import '../firebase/config'


export default function Management() {

    const data = {
        title: 'Management',
        text: 'Hier findet Du alle Optionen, um Dein persönliches Training zu gestalten'
    }
    return (
        <Container id="page-container">
            <Jumbotron>
                <Header title={data.title} text={data.text} />
            </Jumbotron>
            <section className="workout-input__section">
                <h3>Neues Workout hinzufügen:</h3>
                <WorkoutInput />
            </section>


        </Container>
    )
}