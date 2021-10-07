import React, { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    alert("An url was submitted: " + value)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="url" value={value} onChange={handleChange}></input>
      <button>Submit</button>
    </form>
  );
};

// https://open.spotify.com/track/6joEpIEWpZYrezVvqrbvxy?si=dca1797f9f764fa5
// https://open.spotify.com/album/02G0RzkNN3OJDJyxfsVLXL?si=R4rXHYtYSuyU60FEpPjErg&dl_branch=1
// https://open.spotify.com/track/6OpjCczjhrL2u3AsRUzJiZ?si=68f3b3901f824fc4
// https://open.spotify.com/artist/21dVknSLCsK37cWozWDZZS?si=JCbw5GQiTf6EJOAcWMc9OA&dl_branch=1
// https://open.spotify.com/track/33X19bT7VnogUYc5fB6OCV?si=50973019d4884374