import React, { useState } from 'react';
import { projectFirestore } from '../firebase/config';


const WorkoutInput = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [video, setVideo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        projectFirestore.collection('workouts').add({
            title: title,
            category: category,
            video: video
        }).then(() => {
            alert('Erfolgreich gespeichert!');
        }).catch(err => {
            alert(err.message);
        })

        e.target.reset();
    }

    return (
        <form id="workout-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Titel</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Workout-Titel eingeben" required />
            </div>
            <div className="form-group">
                <label >Kategorie</label>
                <select onChange={(e) => setCategory(e.target.value)} className="form-control" >
                    <option value="none" selected disabled hidden>Kategorie wählen</option>
                    <option value="lower">Beine</option>
                    <option value="upper">Oberkörper</option>
                    <option value="cardio">Cardio</option>
                    <option value="recovery">Recovery</option>
                </select>
            </div>
            <div className="form-group">
                <label>Video ID</label>
                <input onChange={(e) => setVideo(e.target.value)} type="text" className="form-control" placeholder="Youtube Video-ID eingeben" required />
            </div>
            <button type="submit" className="custom-btn fancy" id="submit-btn">Abschicken</button>
        </form>
    )
}

export default WorkoutInput