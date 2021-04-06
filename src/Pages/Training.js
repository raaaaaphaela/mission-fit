import React, { useState, useEffect } from 'react'
import WorkoutType from '../components/WorkoutType'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import { db } from '../firebase/config'


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
                <button onClick={selectWorkout} value={upperWorkout}>Oberkörper</button>
                <button onClick={selectWorkout} value={legWorkout}>Beine</button>
            </div>

            {todayTraining === upperWorkout ? <WorkoutType workouts={workouts} category={upperWorkout} /> : ''}
            {todayTraining === legWorkout ? <WorkoutType workouts={workouts} category={legWorkout} /> : ''}


        </Container>
    )

}