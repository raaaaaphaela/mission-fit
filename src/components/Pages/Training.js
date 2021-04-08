import React, { useState, useEffect } from 'react'
import WorkoutType from '../WorkoutType'
import Header from '../Header'
import { Button, Container } from 'react-bootstrap'
import { db } from '../../firebase/config'


export default function Training() {
    const legWorkout = 'lower';
    const upperWorkout = 'upper';

    const [todayTraining, setTodayTraining] = useState('')
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
                setTodayTraining(upperWorkout);
                break;
            case legWorkout:
                setTodayTraining(legWorkout)
                break;
            default:
                setTodayTraining(null)
        }
    }


    return (
        <Container className="training-section" id="page-container" >
            <Header title="Training" text="" />

            <div className="btn-section">
                <Button onClick={selectWorkout} value={upperWorkout}>Oberkörper</Button>
                <Button onClick={selectWorkout} value={legWorkout}>Beine</Button>
            </div>

            {todayTraining === upperWorkout ? <WorkoutType workouts={workouts} category={upperWorkout} /> : ''}
            {todayTraining === legWorkout ? <WorkoutType workouts={workouts} category={legWorkout} /> : ''}


        </Container>
    )

}