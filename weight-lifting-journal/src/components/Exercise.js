import React, { useState } from "react";
import axios from 'axios';

const Exercise = props => {
  const [timeStamp, setTimeStamp] = useState("")

  const deleteExercise = exercise => {
    console.log("ID", props.plant);
    axios
      .delete(
        `https://vdtyson-watermyplants.herokuapp.com/plants/${props.plant.id}`, props.plant.id
      )
      .then(response => {
        console.log("DELETE SUCCESS", response);
        props.setPlants(props.plantList.filter(plant => plant.id !== props.plant.id))
      })
      .catch(error => console.log("DELETE", error));
  };

  return (
    <div>
      <PlantListDiv>
        <ImageStyle src={props.image === " " || props.image === "" ? DefaultPic : props.image} />
        <H4Style>{props.name}</H4Style>
        <H4Style>{props.species}</H4Style>
        <WateredButton onClick={waterTimeStamp}>Mark as Watered</WateredButton>
        <p>Last Watered: {timeStamp}</p>
        <ButtonContain>
          <EditButton>Edit</EditButton>
          <DeleteButton onClick={e => { e.preventDefault(); deletePlant(props.plant.id) }}>Delete</DeleteButton>
        </ButtonContain>
      </PlantListDiv>
    </div>
  );
}


export default Plant;

function Toggle(props) {
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return <div className={`switch ${toggleState}`} onClick={toggle} />;
}