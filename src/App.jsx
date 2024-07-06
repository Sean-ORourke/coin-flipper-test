import logo from './logo.svg';
import './App.css';
import headImg from './headCoin.jpeg'
import tailImg from './tailCoin.jpeg'
import { useState } from 'react';

function App() {

  const [gameState, setGameState] = useState(0);
  const [coin, setCoin] = useState(0);
  const [print, setPrint] = useState("");
  // x, setX



  function handleStart() {
    setGameState(1);
  }

  function flipCoin() {
    setCoin(Math.random());
    // setPrint(Math.random());
    // console.log("Hello :3 " + Math.random());
  }


  return (

    <>
      {/* {gameState == 0 ? ()} */}
      {/* { coin && <p> The coin is heads.</p>}
      { !coin && <p> The coin is tails.</p>} */}

      <img src= {coin > 0.5 ? headImg : tailImg}></img>

      <p> The coin is {coin > 0.5 ? "heads" : "tails"}.</p>
     <p>{coin}</p>
      <button onClick={flipCoin}>Flip Coin</button>
    </>









    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
