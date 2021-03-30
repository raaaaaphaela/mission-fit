import React, { useState } from 'react'
import WorkoutType from '../components/WorkoutType/WorkoutType'
import { workouts } from '../workouts'
import './styles/Training.css'


export default function Training() {
    const legWorkout = 'legs';
    const upperWorkout = 'upper';

    const [todayTraining, setTodayTraining] = useState('')

    function selectWorkout(e) {
        switch (e.target.value) {
            case upperWorkout:
                setTodayTraining(upperWorkout);
                break;
            case legWorkout:
                setTodayTraining(legWorkout)
                break;
        }
    }

    return (
        <section className="training-section">
            <h1>Training</h1>
            <h2>Was steht heute an?</h2>
            <div className="btn-section">
                <button onClick={selectWorkout} value={upperWorkout}>Oberkörper</button>
                <button onClick={selectWorkout} value={legWorkout}>Beine</button>
            </div>
            {todayTraining === upperWorkout ? <WorkoutType workouts={workouts} category={upperWorkout} /> : ''}
            {todayTraining === legWorkout ? <WorkoutType workouts={workouts} category={legWorkout} /> : ''}

        </section>
    )

}