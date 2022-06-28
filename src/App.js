import { useState, useEffect } from 'react';

import './App.css'

import OwnBoard from './components/ownboard';
import OpponentBoard from './components/opponentboard';

import { io } from "socket.io-client";
const socket = io("http://localhost:8080", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  },
  transports: ["websocket"]
});

function App() {
  const [room, setRoom] = useState(""); 
  const [player, setPlayer] = useState(0); 
  // Messages States
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [amountOfUsers, setAmountOfUsers] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      socket.on("data_game", (data) => {
        console.log(data)
      })
      socket.on("user_logged_in", () => {
        setUserIsLoggedIn(true)
      })
      socket.on("what_player", (player) => {
        setPlayer(player)
      })
    }
  };

  useEffect(() => {
    socket.on("res_result", (data) => {
      console.log(data)
    })
    socket.on("people_in_room", (peopleInRoom) => {
      setAmountOfUsers(peopleInRoom)
      console.log(peopleInRoom)
    })
    socket.on("people_joined", () => {
      setAmountOfUsers(2)
    })
  }, [socket])
  return (
    <div className="App">
      {!userIsLoggedIn ?
          <div>
            <input
            placeholder="Room Number..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}> Join Room</button>
          </div>
        
        : <div className='container'>
            <OwnBoard socket={socket} />
            {amountOfUsers === 2 ? <OpponentBoard/> : null}
          </div>
          }
    </div>
  );
}

export default App;
