import React from "react"
import { object, number, func, bool } from "prop-types"

import Card from "../../Card"
import PlayerLives from "./PlayerLives"
import DealerChoosePile from "./DealerChoosePile"

const Player = ({ player, positionTurn, phase, onDealerChoice, displayCards }) => {
    const { name, position, cards, lives, timeBank, dealer, id } = player
    const isPlayersTurn = position === positionTurn

    return (
        <div className="player-wrapper">
            <div className={`non-card-information ${displayCards ? "show-border" : ""}`}>
                <div className="player-name">
                    #{position+1} {name} {dealer && <span>(D)</span>}
                </div>
                <div className="player-lives"><PlayerLives lives={lives} /></div>
                <div className="player-timebank">{timeBank / 60}s</div>
            </div>
            {phase === 2 &&
                <DealerChoosePile onDealerChoice={onDealerChoice} cards={cards} playerId={id} />
            }
            {phase !== 2 && displayCards &&
                <div className="player-cards">
                    {cards.map(card => <Card covered={!isPlayersTurn} card={card} key={card} />)}
                </div>
            }
        </div>
    )
}

Player.propTypes = {
    player: object,
    positionTurn: number,
    phase: number,
    onDealerChoice: func,
    displayCards: bool
}

export default Player