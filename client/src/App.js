import React, { useState, useEffect } from "react";
import { Form } from "./Form";

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

  useEffect(() => {
    setToken(getToken("53bd15ac97bb4754b5722d99ef5f6b56","2989ba2bc3154aa9b117579552fa02ab"))
  }, []);

  return (
    <div>
      <header>
        <Form />
      </header>
    </div>
  );
}

export default App;

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
  console.log(data.access_token)
  return data.access_token;

}