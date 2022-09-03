import React, { useEffect, useState } from "react"

import PlayerSelection from "./components/PlayerSelection"
import Board from "./components/Board"

import { mockPlayers } from "./helpers/mockPlayers"
import { getInitCards } from "./helpers/helperFunctions"

import "./App.scss"

const initCards = getInitCards()
const jumpToPhase = 1

const App = () => {
  const [cards, setCards] = useState(
    [...initCards].sort(() => Math.random() - 0.5)
  )
  const [players, setPlayers] = useState(mockPlayers)
  const [phase, setPhase] = useState(jumpToPhase)
  const [positionTurn, setPositionTurn] = useState(0)
  const [communityCards, setCommunityCards] = useState([])
  let drawnCards = []
  const playersWithCards = []
  const dealersWithCards = []

  useEffect(() => {
    if(phase === 1) dealCards()
  }, [phase])

  const messages = (phase, positionTurn) => {
    if (!phase) return "Keine Phase"
    if (phase === 0) return "Mitspieler anmelden"
    if (phase === 1) return "Karten ausgeben"
    if (phase === 2) return "Dealer sucht Stapel aus"
    if (phase === 3) return `${players.find(player => player.position === positionTurn)?.name} ist am Zug`
  }

  const dealCards = () => {
    const numberOfCardsRegular = Array.from(Array(3).keys())
    const numberOfCardsDealer = Array.from(Array(6).keys())
    const playersMinusDealer = players.filter(player => !player.dealer)
    const playerWhoIsDealer = players.filter(player => player.dealer)
    let playerWithCards
    let dealerWithCards

    playersMinusDealer.map(player => {
      numberOfCardsRegular.map(_ => {
        const getLastCard = cards.pop()
        drawnCards.push(getLastCard)
        return playerWithCards = {...players[player.id], cards: drawnCards}
      })
      drawnCards = []
      return playersWithCards.push(playerWithCards)
    })

    playerWhoIsDealer.map(player => {
      numberOfCardsDealer.map(_ => {
        const getLastCard = cards.pop()
        drawnCards.push(getLastCard)
        return dealerWithCards = {...players[player.id], cards: drawnCards}
      })
      drawnCards = []
      return dealersWithCards.push(dealerWithCards)
    })

    setCards(cards)
    setPlayers(dealersWithCards.concat(playersWithCards))
    setPhase(phase => phase+1)
  }

  const onDealerChoice = payload => {
    const { chosenCards, communityCards, playerId } = payload
    const { position } = players[playerId]
    setPlayers(players => {
      const copy = [...players]
      copy[playerId].cards = chosenCards
      return copy
    })
    setPhase(phase => phase+1)
    setCommunityCards(communityCards)
    turnChange()
  }

  const turnChange = () => {
    if (positionTurn >= players.length - 1) return setPositionTurn(0)
    setPositionTurn(positionTurn => positionTurn + 1)
  }

  console.log("Phase: " + phase + " - " + messages(phase, positionTurn) + " auf Position: " + positionTurn)

  return (
    <div className="App">
      <h1>Schwimmen</h1>
      <p>{messages(phase, positionTurn)}</p>
      <hr />
      {phase === 0 && <PlayerSelection setPlayers={setPlayers} setPhase={setPhase} />}
      {phase > 0 &&
        <Board 
          players={players} 
          cards={cards} 
          communityCards={communityCards} 
          phase={phase}
          positionTurn={positionTurn}
          onDealerChoice={onDealerChoice}
        />
      }
      {/* <button onClick={turnChange}>Next Turn</button> */}
    </div>
  );
}

export default App
