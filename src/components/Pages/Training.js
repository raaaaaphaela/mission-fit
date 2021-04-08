import React, { useState, useEffect } from 'react'
import Workout from '../Workout'
import Header from '../Header'
import { Button, Container } from 'react-bootstrap'
import { db } from '../../firebase/config'


export default function Training() {
    const legWorkout = 'lower';
    const upperWorkout = 'upper';
    const cardio = 'cardio';
    const stretch = 'stretch';
    const beforeAndAfter = 'beforeAndAfter';

    const [training, setTraining] = useState('')
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetchWorkouts();
    }, [])

    const fetchWorkouts = async () => {
        let response = db.collection('workouts');
        let data = await response.get();
        const workouts = []
        data.docs.forEach(workout => {
            workouts.push(workout.data())
        })
        setWorkouts(workouts);
    }

    function selectWorkout(e) {
        switch (e.target.value) {
            case upperWorkout:
                setTraining(upperWorkout);
                break;
            case legWorkout:
                setTraining(legWorkout)
                break;
            case cardio:
                setTraining(cardio)
                break;
            case stretch:
                setTraining(stretch)
                break;
            case beforeAndAfter:
                setTraining(beforeAndAfter)
                break;
            default:
                setTraining(null)
        }
    }


    return (
        <Container className="training-section" id="page-container" >
            <Header title="Training" text="" />
            <div className="btn-section">
                <Button className="training-btn" onClick={selectWorkout} value={upperWorkout}>Oberkörper</Button>
                <Button onClick={selectWorkout} value={legWorkout}>Beine</Button>
                <Button onClick={selectWorkout} value={cardio}>Cardio / FB</Button>
                <Button onClick={selectWorkout} value={stretch}>Stretch</Button>
                <Button onClick={selectWorkout} value={beforeAndAfter}>Warm-Up/Cool-Down</Button>
            </div>
            {training === upperWorkout ? <Workout workouts={workouts} category={upperWorkout} /> : ''}
            {training === legWorkout ? <Workout workouts={workouts} category={legWorkout} /> : ''}
            {training === cardio ? <Workout workouts={workouts} category={cardio} /> : ''}
            {training === stretch ? <Workout workouts={workouts} category={stretch} /> : ''}
            {training === beforeAndAfter ? <Workout workouts={workouts} category={beforeAndAfter} /> : ''}
        </Container>
    )

}