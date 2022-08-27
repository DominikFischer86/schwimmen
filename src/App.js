import React, { useState } from "react"

import PlayerSelection from "./components/PlayerSelection/PlayerSelection"

import "./App.css"

const suits = ["diamonds", "clubs", "hearts", "spades"]
const values = ["ace", "7", "8", "9", "T", "J", "Q", "K"]
const initCards = []
for (const s of suits) {
  for (const v of values) {
    initCards.push(`${v} of ${s}`)
  }
}

const App = () => {
  const [cards, setCards] = useState(
    [...initCards].sort(() => Math.random() - 0.5)
  )
  const [communityCards, setCommunityCards] = []

  return (
    <div className="App">
      <h1>Schwimmen</h1>
      <hr />
      <PlayerSelection />
    </div>
  );
}

export default App
