export const getInitCards = () => {
    const suits = ["diamonds", "clubs", "hearts", "spades"]
    const values = ["7", "8", "9", "T", "J", "Q", "K", "A"]
    const initCards = []
    for (const s of suits) {
        for (const v of values) {
            initCards.push(`${v} of ${s}`)
        }
    }

    return initCards
}

