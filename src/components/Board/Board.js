import React from "react"
import { array, number, func } from "prop-types"

import Card from "../Card"
import Player from "./components/Player"

import "./Board.scss"

const Board = ({ players, cards, communityCards, phase, positionTurn, onDealerChoice }) => {
    const playersMinusDealer = players.filter(player => !player.dealer)
    const playerWhoIsDealer = players.filter(player => player.dealer)
    const playerWhoseTurnItIs = players.filter(player => player.position === positionTurn)
    const playersWhosteTurnItIsNot = players.filter(player => player.position !== positionTurn)
    const undefinedCommunityCards = ['', '', '']

    const sortPlayersWhosteTurnItIsNot = () => {
        const playersToConcat = playersWhosteTurnItIsNot.slice(0, positionTurn)
        const playersToConcatAt = playersWhosteTurnItIsNot.splice(positionTurn, playersWhosteTurnItIsNot.length)
        return playersToConcatAt.concat(playersToConcat)
    }
 
    return (
        <div className="board">
            {phase === 2 && 
                <div className="active-player-area dealer players">
                    <p>Wähle einen der Stapel.</p>
                    {playerWhoIsDealer.map(player => 
                        <Player 
                            phase={phase} 
                            positionTurn={positionTurn} 
                            player={player} 
                            key={player.id}
                            onDealerChoice={onDealerChoice}
                            displayerCards
                        />
                        )
                    }
                </div>
            }
            {phase > 2 &&
                <div className="active-player-area active-player players">
                <p>Tausche eine oder drei Karten, oder schiebe.</p>
                        {playerWhoseTurnItIs.map(player => 
                            <Player 
                                phase={phase} 
                                positionTurn={positionTurn} 
                                player={player} 
                                key={player.id}
                                onDealerChoice={onDealerChoice}
                                displayCards
                            />
                            )
                        }
                </div>
            }

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

            <div className="players inactive-players-area">
            {phase === 2 && 
                playersMinusDealer.map(player => <Player positionTurn={positionTurn} player={player} key={player.id} />)
            }
            {phase > 2 && 
                sortPlayersWhosteTurnItIsNot().map(player => <Player positionTurn={positionTurn} player={player} key={player.id} />)
            }    
            </div>

            <div className="draw-deck">
                <p>Nachziehstapel</p>
                {cards.map((card, id) => (<Card id={id} covered card={card} key={card} />))}
            </div>
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
