import React from 'react'
import WorkoutType from '../components/WorkoutType/WorkoutType'
import { workouts } from '../workouts'


export default function Training() {

    const legWorkout = 'legs';
    const upperWorkout = 'upper';

    return (
        <>
            <h1 id="heading">Training</h1>
            <WorkoutType workoutType="Oberkörper" workouts={workouts} category={upperWorkout} />
            <WorkoutType workoutType="Beine" workouts={workouts} category={legWorkout} />
        </>
    )

}