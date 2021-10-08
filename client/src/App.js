import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { getIdFromUrl } from "./helpers/getIdFromUrl";

function App() {
  // const [apiResponse, setApiResponse] = useState("");

  // const callApi = async () => {
  //   const res = await fetch("http://localhost:9000/testAPI");
  //   const response = await res.text()
  //   setApiResponse(response)
  // };

  // useEffect(() => {
  //   callApi();
  // }, []);

  const [token, setToken] = useState("");
  const [genres, setGenres] = useState([]);
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
      console.log("State: ", token)
      console.log(data.access_token)
      return data.access_token;
    
    }

    getToken(clientId, clientSecret)

  }, []);

  // get a list of genres
  useEffect(() => {
    async function getGenres(token){
      const result = await fetch("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
        method: "GET",
        headers: { "Authorization" : "Bearer " + token} 
      })

      const data = await result.json()
      setGenres(data.categories.items || [])
      const names = genres.map(item => item.name) || []
      console.log("State genres: ", names)
      return data.categories.items
    }

    getGenres(token)
  }, [token])

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
      console.log("State track: ", track.name)
      return data
    }

    fetchTrack(token, trackId)
  }
  

  return (
    <div>
      <header>
        <Form getTrack={getTrack}/>
        <p>{track.name}</p>
      </header>
    </div>
  );
}

export default App;

//"4cTW1QdgCJiqE1Pvreb80L"