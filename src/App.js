import React, {  useState } from "react"

import "./App.css"

const suits = ["diamonds", "clubs", "hearts", "spades"]
const values = ["ace", "7", "8", "9", "T", "J", "Q", "K"]
const initCards = []
for (const s of suits) {
  for (const v of values) {
    initCards.push(`${v} of ${s}`)
  }
}

const TIME_BANK = 3000
const LIVES = 4
const MAX_Players = 8
const players = []
const playerArray = ["0"]

const App = () => {
  const [playerCount, setPlayerCount] = useState(0)
  const [player, setPlayer] = useState({
    id: "0",
    name: "",
    dealer: true,
    lives: LIVES,
    timeBank: TIME_BANK,
    position: 0
  })

  const [cards, setCards] = useState(
    [...initCards].sort(() => Math.random() - 0.5)
  )
  const [communityCards, setCommunityCards] = []

  const onChange = e => {
    const targetId = e.target.name.split("_")[1]
    const inputText = e.target.value

    setPlayer({ 
      ...player,
      id: targetId,
      name: inputText,
      position: parseInt(targetId)
    })
  }

  const addPlayer = e => {
    e.preventDefault()
    setPlayerCount(playerCount => playerCount + 1)
    players.push(player)
    if (playerArray.length < MAX_Players) playerArray.push((playerCount+1).toString())
    setPlayer({ 
      ...player,
      id: playerCount.toString(),
      dealer: false,
      name: "",
      position: parseInt(playerCount)
    })
  }

  const initGame = () => {
    console.log(players)
  }

  return (
    <div className="App">
      <h1>Schwimmen</h1>
      <hr />
      <div className="getPlayersContainer">
        {playerArray.map((_, id) => (
            <form key={`player-${id}`} className="addPlayersForm" onSubmit={addPlayer}>
              <input 
                onChange={onChange} 
                disabled={playerCount >= MAX_Players} 
                type="text" 
                id={`player_${playerCount}`}
                name={`player_${playerCount}`}
                placeholder={`Input name for player ${playerCount + 1}`}
                value={players[playerCount]?.name} />
              <button
                disabled={playerCount >= MAX_Players || !player.name.length || id !== playerCount} 
                onClick={addPlayer}>
                  +
              </button>
            </form>
          )
        )}
        <hr />
        <button onClick={initGame}>Start game</button>
      </div>
    </div>
  );
}

export default App
