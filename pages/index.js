import memoryCard1 from '../public/memoryCards/memoryCard-1.png'
import memoryCard2 from '../public/memoryCards/memoryCard-2.png'
import memoryCard3 from '../public/memoryCards/memoryCard-3.png'
import memoryCard4 from '../public/memoryCards/memoryCard-4.png'
import memoryCard5 from '../public/memoryCards/memoryCard-5.png'
import memoryCard6 from '../public/memoryCards/memoryCard-6.png'
import memoryCard7 from '../public/memoryCards/memoryCard-7.png'
import memoryCard8 from '../public/memoryCards/memoryCard-8.png'

import {useState} from "react";
import FlipCard from "./api/FlipCard";

export default function Home() {
    const data = [
        {index: 0, id: 1, image: memoryCard1, pop: false}, {index: 8, id: 1, image: memoryCard1, pop: false},
        {index: 1, id: 2, image: memoryCard2, pop: false}, {index: 9, id: 2, image: memoryCard2, pop: false},
        {index: 2, id: 3, image: memoryCard3, pop: false}, {index: 10, id: 3, image: memoryCard3, pop: false},
        {index: 3, id: 4, image: memoryCard4, pop: false}, {index: 11, id: 4, image: memoryCard4, pop: false},
        {index: 4, id: 5, image: memoryCard5, pop: false}, {index: 12, id: 5, image: memoryCard5, pop: false},
        {index: 5, id: 6, image: memoryCard6, pop: false}, {index: 13, id: 6, image: memoryCard6, pop: false},
        {index: 6, id: 7, image: memoryCard7, pop: false}, {index: 14, id: 7, image: memoryCard7, pop: false},
        {index: 7, id: 8, image: memoryCard8, pop: false}, {index: 15, id: 8, image: memoryCard8, pop: false}
    ];

    const [score, setScore] = useState(0);
    const [matchIsOver, setMatchOver] = useState(false);
    const [cachedCard, setCachedCard] = useState({card: null, callback: null});
    const [hasFirstCardFlipped, setHasFirstCardFlipped] = useState(false);
    const [memoryCards, setMemoryCards] = useState(shuffle(data));

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    const handleClick = (card, callback) => {
        if (hasFirstCardFlipped && cachedCard.card.index !== card.index && cachedCard.card.pop !== true && card.pop !== true) {
            if (cardsMatch(cachedCard.card, card)) {
                setScore(score + 1);
                setTimeout(() => {
                    cachedCard.card.pop = true;
                    card.pop = true;
                    if (memoryCards.every(card => card.pop === true)) {
                        console.log("match is over")
                        setMatchOver(true);
                    }
                }, 500)
            }
            setHasFirstCardFlipped(false);
            setCachedCard(null);
            setTimeout(() => {
                cachedCard.callback(false);
                callback(false);
            }, 1000)
        } else {
            setCachedCard({card, callback});
            setHasFirstCardFlipped(true);
        }
    }

    const cardsMatch = (card1, card2) => {
        return card1.id === card2.id;
    }

    const resetGame = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <div className="scoreboard">
                <div className="score">{score}</div>
                <button className='btn' onClick={resetGame}>reset</button>
            </div>
            {matchIsOver ?
                <button className='btn center' onClick={resetGame}>reset</button> :
                <div className='center game'>
                    {memoryCards.map((card, index) => (
                        <FlipCard key={index} handleClick={handleClick} card={card}/>
                    ))}
                </div>
            }
        </div>
    )
}
