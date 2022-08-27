import React, { useEffect, useState } from "react"

import PlayerSelection from "./components/PlayerSelection"
import Card from "./components/Card"

import { mockPlayers } from "./helpers/mockPlayers"
import { getInitCards } from "./helpers/helperFunctions"

import "./App.scss"

const initCards = getInitCards()

const App = () => {
  const [cards, setCards] = useState(
    [...initCards].sort(() => Math.random() - 0.5)
  )
  const [players, setPlayers] = useState(mockPlayers)
  const [phase, setPhase] = useState(1)
  const [communityCards, setCommunityCards] = []
  let drawnCards = []
  const playersWithCards = []
  const dealersWithCards = []

  useEffect(() => {
    if(phase === 1) return dealCards()
  }, [phase])

  const messages = phase => {
    if (phase === 0) return "Mitspieler anmelden"
    if (phase === 1) return "Karten ausgeben"
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
        playerWithCards = {...players[player.id], cards: drawnCards}
      })
      drawnCards = []
      playersWithCards.push(playerWithCards)
    })

    playerWhoIsDealer.map(player => {
      numberOfCardsDealer.map(_ => {
        const getLastCard = cards.pop()
        drawnCards.push(getLastCard)
        dealerWithCards = {...players[player.id], cards: drawnCards}
      })
      drawnCards = []
      dealersWithCards.push(dealerWithCards)
    })

    setCards(cards)
    setPlayers(dealersWithCards.concat(playersWithCards))
  }

  console.log(cards)
  console.log(players)

  return (
    <div className="App">
      <h1>Schwimmen</h1>
      <p>{messages(phase)}</p>
      <hr />
      {phase === 0 && <PlayerSelection setPlayers={setPlayers} setPhase={setPhase} />}
      {phase === 1 && 
      (<div>
         <div className="cards">
          {cards.map(card => (
            <Card card={card} key={card} />
          ))}
        </div>
      </div>
      )}
    </div>
  );
}

export default App
