import React from "react"
import { array, number, func } from "prop-types"

import Card from "../Card"
import Player from "./components/Player"

import "./Board.scss"

const Board = ({ players, cards, communityCards, phase, positionTurn, onDealerChoice }) => {
    const playersMinusDealer = players.filter(player => !player.dealer)
    const playerWhoIsDealer = players.filter(player => player.dealer)
    const undefinedCommunityCards = ['', '', '']

    return (
        <div className="board">
            <div className="players">
                {playersMinusDealer.map(player => <Player positionTurn={positionTurn} player={player} key={player.id} />)}
                
            </div>

            <div className="draw-deck">
                <p>Nachziehstapel</p>
                {cards.map((card, id) => (<Card id={id} covered card={card} key={card} />))}
            </div>

            <div className="community-cards">
                <p>Gemeinschaftskarten</p>
                <div>
                    {!communityCards.length && undefinedCommunityCards.map((card, id) => (
                            <Card card={card} key={id} />
                        ))   
                    }
                    {communityCards.length > 0 && communityCards.map(card => (
                            <Card card={card} key={card} />
                        ))   
                    }
                </div>
            </div>

            {phase === 2 && 
                <div className="dealer players">
                    <p>Wähle einen der Stapel.</p>
                    {playerWhoIsDealer.map(player => 
                        <Player 
                            phase={phase} 
                            positionTurn={positionTurn} 
                            player={player} 
                            key={player.id}
                            onDealerChoice={onDealerChoice} 
                        />)}
                </div>
            }
            <div className="active-player"></div>
        </div>
    )
}

Board.propTypes = {
    players: array,
    cards: array,
    communityCards: array,
    phase: number,
    positionTurn: number,
    onDealerChoice: func
}

export default Board
