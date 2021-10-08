import React, { useState } from "react";

export const Form = ({getTrack}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    getTrack(value)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} style={styleForm}>
      <input type="url" value={value} onChange={handleChange} style={styleInput}></input>
      <button style={styleButton}>S</button>
    </form>
  );
};
const styleForm = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  minWidth: "75%",
  // borderStyle: "solid",
  // borderWidth: 1,
  // borderColor: "aqua"
}
const styleInput = {
  flex: 1,
  backgroundColor: "black",
  borderStyle: "solid",
  borderWidth: 2.5, 
  borderColor: "#F72585",
  outline: "none",
  color: "#4CC9F0",
  fontSize: 24,
  fontFamily: "Helvetica"
}

const styleButton = {
  width: "3.5em",
  height: "3.5em",
  marginLeft: "0.5em",
  borderRadius: 0,
  borderStyle: "none",
  backgroundColor: "#F72585",

}

// https://open.spotify.com/track/6joEpIEWpZYrezVvqrbvxy?si=dca1797f9f764fa5
// https://open.spotify.com/album/02G0RzkNN3OJDJyxfsVLXL?si=R4rXHYtYSuyU60FEpPjErg&dl_branch=1
// https://open.spotify.com/track/6OpjCczjhrL2u3AsRUzJiZ?si=68f3b3901f824fc4
// https://open.spotify.com/artist/21dVknSLCsK37cWozWDZZS?si=JCbw5GQiTf6EJOAcWMc9OA&dl_branch=1
// https://open.spotify.com/track/33X19bT7VnogUYc5fB6OCV?si=50973019d4884374