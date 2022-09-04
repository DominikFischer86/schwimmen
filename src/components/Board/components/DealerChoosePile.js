import React from "react"
import { array, func, string } from "prop-types"

import Card from "../../Card"

const DealerChoosePile = ({ onDealerChoice, cards, playerId }) => {
    const pileOne = cards.splice(0, 3)
    const pileTwo = cards

    const choosePile = orderedPile => {
        const payload = {
            chosenCards: orderedPile.picked,
            communityCards: orderedPile.abandoned,
            playerId: playerId
        }
        onDealerChoice(payload)
    }

    return (
        <div className="dealer-choice">
            <div className="player-cards left-pile">
                {pileOne.map(card => <Card card={card} key={card} />)}
            </div>
            <div className="dealer-choice-buttons">
                <button name="pileOne" onClick={() => choosePile({ picked: pileOne, abandoned: pileTwo })}>☝️</button>
                <button name="pileTwo" onClick={() => choosePile({ picked: pileTwo, abandoned: pileOne })}>👇</button>
            </div>
            <div className="player-cards right-pile">
                {pileTwo.map(card => <Card covered card={card} key={card} />)}
            </div>
        </div>
    )
}

DealerChoosePile.propTypes = {
    cards: array,
    onDealerChoice: func,
    playerId: string
}

export default DealerChoosePile