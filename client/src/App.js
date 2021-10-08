import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { Info } from "./Info";
import { getIdFromUrl } from "./helpers/getIdFromUrl";

function App() {
  const [token, setToken] = useState("");
  const [track, setTrack] = useState({})

  // get authentication token from Spotify
  useEffect(() => {
    const clientId = "53bd15ac97bb4754b5722d99ef5f6b56"
    const clientSecret = "2989ba2bc3154aa9b117579552fa02ab"

    async function getToken(clientId, clientSecret) {
      const str = clientId + ":" + clientSecret;
    
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + Buffer.from(str, "binary").toString("base64"),
        },
        body: "grant_type=client_credentials",
      });
    
      const data = await result.json();
      setToken(data.access_token)
      return
    }

    getToken(clientId, clientSecret)

  }, []);

  // get a track
  const getTrack = url => {
    const trackId = getIdFromUrl(url)

    async function fetchTrack(token, trackId){
      const result = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        method: "GET",
        headers: { "Authorization" : "Bearer " + token} 
      })

      const data = await result.json()
      setTrack(data)
      return
    }

    fetchTrack(token, trackId)
  }

  return (
    <div style={styleContainer}>
      <div style={styleContentBox}>
        <Form getTrack={getTrack}/>
        <Info track={track}/>
      </div>
    </div>
  );
}

export default App;

const styleContainer = {
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "80%",
  // borderStyle: "solid",
  // borderWidth: 1,
  // borderColor: "red",
  justifyContent: "center",
  alignItems: "center"
}

const styleContentBox = {
  marginTop: 100,
  display: "flex", 
  flexDirection: "column",
  height: 500,
  alignItems: "center",
}

//"4cTW1QdgCJiqE1Pvreb80L"