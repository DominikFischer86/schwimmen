import React from "react"
import { array, number } from "prop-types"

import Card from "../Card"
import Player from "./components/Player"

import "./Board.scss"

const Board = ({players, cards, communityCards, phase}) => {
    console.log(players)
    console.log(cards)
    const undefinedCommunityCards = ['', '', '']

    return (
        <div className="board">
            <div className="players">
                {players.map(player => <Player player={player} key={player.id} />)}
                
            </div>
            <div className="non-player-cards">
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
            </div>
           
            <div className="dealer"></div>
            <div className="active-player"></div>
        </div>
    )
}

Board.propTypes = {
    players: array,
    cards: array,
    communityCards: array,
    phase: number
}

export default Board
