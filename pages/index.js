import {useEffect, useState} from "react";
import FlipCard from "../components/FlipCard";
import WinScreen from "../components/WinScreen";
import memoryCardsData from "../components/memoryCardsData";

export default function Home() {

    const memoryData = memoryCardsData;
    const [score, setScore] = useState(0);
    const [matchIsOver, setMatchOver] = useState(false);
    const [cachedCard, setCachedCard] = useState({card: null, callback: null});
    const [hasFirstCardFlipped, setHasFirstCardFlipped] = useState(false);
    const [memoryCards, setMemoryCards] = useState([]);

    useEffect(() => setMemoryCards(shuffle(createMemoryCardData())), []);

    function createMemoryCardData() {
        const data = [];
        for (let i = 0; i <= 7; i++) {
            const random = Math.floor(Math.random() * (((memoryData.length - 1) - i) + 1));
            const card = memoryData.splice(random, 1)[0].default;
            data.push({index: i, id: (i + 1), image: card, pop: false});
            data.push({index: (i + 8), id: (i + 1), image: card, pop: false});
        }
        return data;
    }

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
                    <div className='header-links'>
                        <button className='btn' onClick={resetGame}>reset</button>
                    </div>
                }
            </div>
            {matchIsOver ?
                <WinScreen reset={resetGame}/> :
                <div className='center game'>
                    {memoryCards.map((card, index) => (
                        <FlipCard key={index} handleClick={handleClick} card={card}/>
                    ))}
                </div>
            }
        </div>
    )
}
