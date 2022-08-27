import React from "react"
import { string, bool } from "prop-types"

import "./Card.scss"

const Card = ({ card, covered }) => {
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
                    <span className="upsideDown">{value}</span>
                </div>
            }
            {covered &&
                <div className={`card covered`}></div>
            }
        </>
    )
}

Card.propType = {
    card: string,
    covered: bool
}

export default Card