import memoryCard1 from "../public/memoryCards/memoryCard-1.png";
import memoryCard2 from "../public/memoryCards/memoryCard-2.png";
import memoryCard3 from "../public/memoryCards/memoryCard-3.png";
import memoryCard4 from "../public/memoryCards/memoryCard-4.png";
import memoryCard5 from "../public/memoryCards/memoryCard-5.png";
import memoryCard6 from "../public/memoryCards/memoryCard-6.png";
import memoryCard7 from "../public/memoryCards/memoryCard-7.png";
import memoryCard8 from "../public/memoryCards/memoryCard-8.png";
import memoryCard9 from "../public/memoryCards/memoryCard-9.png";
import memoryCard10 from "../public/memoryCards/memoryCard-10.png";
import memoryCard11 from "../public/memoryCards/memoryCard-11.png";
import memoryCard12 from "../public/memoryCards/memoryCard-12.png";
import memoryCard13 from "../public/memoryCards/memoryCard-13.png";
import memoryCard14 from "../public/memoryCards/memoryCard-14.png";
import memoryCard15 from "../public/memoryCards/memoryCard-15.png";
import memoryCard16 from "../public/memoryCards/memoryCard-16.png";
import memoryCard17 from "../public/memoryCards/memoryCard-17.png";
import memoryCard18 from "../public/memoryCards/memoryCard-18.png";
import memoryCard19 from "../public/memoryCards/memoryCard-19.png";
import memoryCard20 from "../public/memoryCards/memoryCard-20.png";
import memoryCard21 from "../public/memoryCards/memoryCard-21.png";
import memoryCard22 from "../public/memoryCards/memoryCard-22.png";
import memoryCard23 from "../public/memoryCards/memoryCard-23.png";
import memoryCard24 from "../public/memoryCards/memoryCard-24.png";
import memoryCard25 from "../public/memoryCards/memoryCard-25.png";
import memoryCard26 from "../public/memoryCards/memoryCard-26.png";
import memoryCard27 from "../public/memoryCards/memoryCard-27.png";
import memoryCard28 from "../public/memoryCards/memoryCard-28.png";
import memoryCard29 from "../public/memoryCards/memoryCard-29.png";
import memoryCard30 from "../public/memoryCards/memoryCard-30.png";
import memoryCard31 from "../public/memoryCards/memoryCard-31.png";
import memoryCard32 from "../public/memoryCards/memoryCard-32.png";
import memoryCard33 from "../public/memoryCards/memoryCard-33.png";
import memoryCard34 from "../public/memoryCards/memoryCard-34.png";
import memoryCard35 from "../public/memoryCards/memoryCard-35.png";
import memoryCard36 from "../public/memoryCards/memoryCard-36.png";
import memoryCard37 from "../public/memoryCards/memoryCard-37.png";

import {useState} from "react";
import FlipCard from "../components/FlipCard";
import WinScreen from "../components/WinScreen";

export default function Home() {
    const availableCards = [
        memoryCard1,memoryCard2,memoryCard3,memoryCard4,memoryCard5,
        memoryCard6,memoryCard7,memoryCard8,memoryCard9,memoryCard10,
        memoryCard11,memoryCard12,memoryCard13,memoryCard14,memoryCard15,
        memoryCard16,memoryCard17,memoryCard18,memoryCard19,memoryCard20,
        memoryCard21,memoryCard22,memoryCard23,memoryCard24,memoryCard25,
        memoryCard26,memoryCard27,memoryCard28,memoryCard29,memoryCard30,
        memoryCard31,memoryCard32,memoryCard33,memoryCard34,memoryCard35,
        memoryCard36,memoryCard37,
    ]

    const data = [
        {index: 0, id: 1, image: memoryCard1, pop: false}, {index: 8, id: 1, image: memoryCard1, pop: false},
        {index: 1, id: 2, image: memoryCard2, pop: false}, {index: 9, id: 2, image: memoryCard2, pop: false},
        {index: 2, id: 3, image: memoryCard3, pop: false}, {index: 10, id: 3, image: memoryCard3, pop: false},
        {index: 3, id: 4, image: memoryCard4, pop: false}, {index: 11, id: 4, image: memoryCard4, pop: false},
        {index: 4, id: 5, image: memoryCard5, pop: false}, {index: 12, id: 5, image: memoryCard5, pop: false},
        {index: 5, id: 6, image: memoryCard6, pop: false}, {index: 13, id: 6, image: memoryCard6, pop: false},
        {index: 6, id: 7, image: memoryCard7, pop: false}, {index: 14, id: 7, image: memoryCard7, pop: false},
        {index: 7, id: 8, image: memoryCard8, pop: false}, {index: 15, id: 8, image: memoryCard8, pop: false}
    ]

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
        window.location.reload();
    }

    return (
        <div>
            <div className="scoreboard">
                <div className="score">{score}</div>
                {matchIsOver ?
                    null :
                    <button className='btn' onClick={resetGame}>reset</button>
                }
            </div>
            {matchIsOver ?
                <WinScreen reset={resetGame} /> :
                <div className='center game'>
                    {memoryCards.map((card, index) => (
                        <FlipCard key={index} handleClick={handleClick} card={card}/>
                    ))}
                </div>
            }
        </div>
    )
}
