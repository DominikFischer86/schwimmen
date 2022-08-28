import React from "react"
import { object } from "prop-types"

import Card from "../../Card"
import PlayerLives from "./PlayerLives"

const Player = ({ player }) => {
    const { name, position, cards, lives, timeBank } = player

    return (
        <div className="player-wrapper">
            <div className="non-card-information">
                <div className="player-position">#{position+1}</div>
                <div className="player-name">{name}</div>
                <div className="player-lives"><PlayerLives lives={lives} /></div>
                <div className="player-timebank">{timeBank / 60}s</div>
            </div>
           
            <div className="player-cards">
                {cards.map(card => <Card card={card} key={card} />)}
            </div>
        </div>
    )
}

Player.propTypes = {
    player: object
}

export default Player