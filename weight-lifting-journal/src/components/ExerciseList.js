import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import styled from 'styled-components';
import navBar from './Navigation';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-family: Roboto;
    background-color: #00a35e;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    max-width: 100%;
    font-size: 62.5%;
`;
const NavLinks = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    max-width: 100%;
    font-size: 62.5%;
    display: flex-row;
    justify-content: flex-end;
    font-size: 1.2rem;
    font-style: none;
    color: white;
    margin-top: 25px;
`;

const ExerciseList = props => {
  const [exerciseList, setExerciseList] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    axios
      .get(
        `https://bw-weight-lifting.herokuapp.com/api/users/:id/exercises`
      )
      .then(response => {
        const userID = response.data;
        console.log(userID);
        axios
          .get(
            `https://bw-weight-lifting.herokuapp.com/api/users/${userID}`
          )
          .then(response => {
            console.log(response.data);
            setExerciseList(response.data);
            console.log(exerciseList);
          })
          .catch(error => {
            console.log('Something bonked up!', error);
          });
      })
      .catch(error => console.log('error', error));
  }, []);
}

return (
  <div>
    <navBar />
    <div>
      <h3 className='workout-list'>My Workouts</h3>
      <Link className='add-workout-button' to='/profile/add-workout'>
        <div>Add Workout</div>
      </Link>
      </div>
        <div>
        {exerciseList.map(plant => (
          <Exercise
            exerciseList={exerciseList}
            setexercise={setExerciseList}
            exercise={exercise}
            value={exercise.id}
            key={exercise.id}
            name={exercise.nickname}
            area={exercise.exerciseArea}
            />
        ))}
        </div>
      </div>
)

export default ExerciseList;