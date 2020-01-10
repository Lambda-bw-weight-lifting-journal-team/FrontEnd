import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import AddWorkOuts from "./AddWorkOuts";

//person profile
//and persons workouts
//button to add more workouts

const Profile = props => {

    const [addMode, setAddMode] = useState(false);

    return (
        <div>
            <h2>Welcome, {props.username}</h2>
            <h3>Workout History</h3>
            <ul>
                {props.state.exercises.map(exercise => (
                    <li>
                        <p>name: {exercise.name}</p>
                        <p>{exercise.date}</p>
                        <p>weight: {exercise.amount_lifted} {exercise.units}</p>
                        <p>reps: {exercise.reps_completed}</p>
                        <p>region: {exercise.body_region}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => {setAddMode(true)}}>Add Workout</button>
            {addMode && <AddWorkOuts addMode={addMode} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        exercises: state.exercises
    }
}

export default connect(mapStateToProps)(Profile);