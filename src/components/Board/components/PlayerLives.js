import React from "react"
import { number } from "prop-types"

const PlayerLives = ({lives}) => {
    return (
        <>
            {lives === 4 && <div><span>♥</span><span>♥</span><span>♥</span></div>}
            {lives === 3 && <div><span>♥</span><span>♥</span><span>♡</span></div>}
            {lives === 2 && <div><span>♥</span><span>♡</span><span>♡</span></div>}
            {lives === 1 && <div className="swim"><span>♡</span><span>♡</span><span>♡</span></div>}
        </>
    )
}

PlayerLives.propTypes = {
    lives: number
}

export default PlayerLives