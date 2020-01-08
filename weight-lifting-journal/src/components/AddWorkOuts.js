//form to add workouts that shows new work outs and also has a buttom to delete them or edit them 
import React, { useState } from "react";

function AddWorkOuts(props) {
  const [workouts, setworkouts] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...workouts];
    values[i].value = event.target.value;
    setworkouts(values);
  }

  function handleAdd() {
    const values = [...workouts];
    values.push({ value: null });
    setworkouts(values);
    props.addMode = false;
  }

  function handleRemove(i) {
    const values = [...workouts];
    values.splice(i, 1);
    setworkouts(values);
    props.addMode = false;
  }

  return (
    <div>
      <h1>Add or Delete Your Workouts</h1>

      <button type="button" onClick={() => handleAdd()}>
        +
      </button>

      {workouts.map((workout, idx) => {
        return (
          <form>
            <div key={`${workout}-${idx}`}>
              <label>Workout:
              <input
                  type="text"
                  placeholder="Enter Workout Name"
                  value={workout.value || ""}
                  onChange={e => handleChange(idx, e)}
                /></label> <br />
              <label>Weight:
              <input
                  placeholder="Weight (lb)"
                  type="number"
                  name="weight"
                  value={workout.weight}
                />
              </label><br />
              <label>Reps:
              <input
                  placeholder="Repetitions"
                  name="reps"
                  type="number"
                  value={workout.reps}
                />
              </label>
              <button type="button" onClick={() => handleRemove(idx)}>
                X
              </button>
            </div>
          </form>
        );
      })}
    </div>
  );
}

export default AddWorkOuts;