import React, { useState } from "react"
import { func } from "prop-types"

import { LIVES, TIME_BANK, MAX_PLAYERS } from "../../helpers/constants"

const players = []
const playerArray = ["0"]

const PlayerSelection = ({ setPlayers, setPhase }) => {
    const [playerCount, setPlayerCount] = useState(0)
    const [player, setPlayer] = useState({
        id: "0",
        name: "",
        dealer: true,
        lives: LIVES,
        timeBank: TIME_BANK,
        position: 0,
        cards: []
      })

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
        if (playerArray.length < MAX_PLAYERS) playerArray.push((playerCount+1).toString())
        setPlayer({ 
          ...player,
          id: playerCount.toString(),
          dealer: false,
          name: "",
          position: parseInt(playerCount)
        })
    }

    const initGame = () => {
        if (players.length < 2) return alert("At least 2 players are necessary to play Schwimmen")
        setPlayers(players)
        setPhase(1)
    }

    return (
        <div className="getPlayersContainer">
        {playerArray.map((_, id) => (
            <form key={`player-${id}`} className="addPlayersForm" onSubmit={addPlayer}>
            <input 
                onChange={onChange} 
                disabled={playerCount >= MAX_PLAYERS} 
                type="text" 
                id={`player_${playerCount}`}
                name={`player_${playerCount}`}
                placeholder={`Input name for player ${playerCount + 1}`}
                value={players[playerCount]?.name} />
            <button
                disabled={playerCount >= MAX_PLAYERS || !player.name.length || id !== playerCount} 
                onClick={addPlayer}>
                +
            </button>
            </form>
            )
        )}
        <hr />
        <button onClick={initGame}>Start game</button>
      </div>
    )
}

PlayerSelection.propTypes = {
    setPlayers: func,
    setPhase: func
}

export default PlayerSelection