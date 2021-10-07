import React, { useState, useEffect } from "react";
import { Form } from "./Form";

function App() {
  const [apiResponse, setApiResponse] = useState("");

  const callApi = async () => {
    const res = await fetch("http://localhost:9000/testAPI");
    const response = await res.text()
    setApiResponse(response)
  };

  useEffect(() => {
    callApi();
  }, []);


  return (
    <div>
      <header>
        <Form />
        <p>{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;
