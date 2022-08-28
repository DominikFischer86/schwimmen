import React from "react"
import { string, bool } from "prop-types"

import "./Card.scss"

const Card = ({ id, card, covered }) => {
    const value = card.split(" of ")[0]
    const color = card.split(" of ")[1]

    const colorSymbol = color => {
        if (color === "clubs") return "♣"
        if (color === "diamonds") return "♦"
        if (color === "spades") return "♠"
        if (color === "hearts") return "♥"
    }

    return (
        <>
            {!covered &&
                <div className={`card ${value} ${color}`}>
                    <span>{value}</span> 
                    <span className="symbol">{colorSymbol(color)}</span>
                    <span className="upside-down">{value}</span>
                </div>
            }
            {covered &&
                <div style={{ transform: `translateY(${-id*1.5}px)`}} className="card covered"></div>
            }
        </>
    )
}

Card.propType = {
    id: string,
    card: string.isRequired,
    covered: bool
}

export default Card