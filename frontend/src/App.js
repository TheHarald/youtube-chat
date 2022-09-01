import React, { useEffect, useRef, useState } from 'react';
import io from "socket.io-client";
const ENDPOINT = "http://localhost:3001/api";

const socket = io.connect(ENDPOINT);

function App() {

  const [response, setResponse] = useState("");


  useEffect(()=>{
    console.log(socket);
  },[])
  
  return (
    <div>
      <h1>HelloWssa</h1>
    </div>
  );
}

export default App;
