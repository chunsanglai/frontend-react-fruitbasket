
import './App.css'
import React, {useState} from 'react'

function App() {
  const [banana, setBananas] = useState(0);
  const [strawberries, setStrawberries] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

function Reset() {
  setStrawberries(0);
  setBananas(0);
  setApples(0);
  setKiwis(0);
}

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <article>
          <h2>🍓 Aardbeien</h2>
            <button type="button" disabled={strawberries === 0} onClick={() => setStrawberries(strawberries - 1)}> - </button> 
            <span> {strawberries} </span>
            <button type="button" onClick={() => setStrawberries(strawberries + 1)}> + </button>
        </article>
          <h2>🍌 Bananen</h2>
            <button type="button" disabled={banana === 0} onClick={() => setBananas(banana - 1)}> - </button>
            <span> {banana} </span>
            <button type="button" onClick={() => setBananas(banana + 1)}> + </button>
        <article>
          <h2>🍎 Appels</h2>
            <button type="button" disabled={apples === 0} onClick={() => setApples(apples - 1)}> - </button>
            <span> {apples} </span>
            <button type="button" onClick={() => setApples(apples + 1)}> + </button>
        </article>
        <article>
          <h2>🥝 Kiwi's</h2>
            <button type="button" disabled={kiwis === 0} onClick={() => setKiwis(kiwis - 1)}> - </button>
            <span> {kiwis} </span>
            <button type="button" onClick={() => setKiwis(kiwis + 1)}> + </button>
        </article>
        <button type="button" onClick={() => Reset()}>Reset</button>
    </>
  )
}

export default App
