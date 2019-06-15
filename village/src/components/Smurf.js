import React from "react";

const Smurf = props => {
  if (props.smurfs.length === 0) {
    return (
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} cm tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    );
  }
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
