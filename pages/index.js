import memoryCard1 from "../public/memoryCards/memoryCard-1.png";
import memoryCard2 from "../public/memoryCards/memoryCard-2.png";
import memoryCard3 from "../public/memoryCards/memoryCard-3.png";
import memoryCard4 from "../public/memoryCards/memoryCard-4.png";
import memoryCard5 from "../public/memoryCards/memoryCard-5.png";
import memoryCard6 from "../public/memoryCards/memoryCard-6.png";
import memoryCard7 from "../public/memoryCards/memoryCard-7.png";
import memoryCard8 from "../public/memoryCards/memoryCard-8.png";

import {useState} from "react";
import FlipCard from "../components/FlipCard";
import WinScreen from "../components/WinScreen";

export default function Home() {
    // Memory Karten als Array
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

    // Eine Variable für den Punktestand
    const [score, setScore] = useState(0);

    //
    const [matchIsOver, setMatchOver] = useState(false);

    // Eine Variable um die erste geflippete Karte zu speichern
    const [cachedCard, setCachedCard] = useState({card: null, callback: null});

    // Eine Variable um zu wissen ob die erste Karte geflippt wurde
    const [hasFirstCardFlipped, setHasFirstCardFlipped] = useState(false);

    // Eine Variable für die Memory Cards
    const [memoryCards, setMemoryCards] = useState(shuffle(data));

    // Eine Methode zum durchmischen der Memory Karten
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {

            // Für jedes Object im array wird ein zufälliger Platz im Array
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Eine Methode die das Klick Event verarbeitet
    const handleClick = (card, callback) => {
        // Checken ob die erste Karte geflippt wurde
        // Zusatz: Checken ob die erste Karte den selben Index wie die zweite hat
        // Zusatz: Checken das die gewählten Karten nicht bereits gelöst wurden
        if (hasFirstCardFlipped && cachedCard.card.index !== card.index && cachedCard.card.pop !== true && card.pop !== true) {

            // Checken ob die erste und die zweite Karte identisch sind
            if (cardsMatch(cachedCard.card, card)) {

                // Den Score erhöhen
                setScore(score + 1);

                // Die Karten als gelöst markieren
                setTimeout(() => {
                    cachedCard.card.pop = true;
                    card.pop = true;

                    // Wenn das die letzten gelösten Karten waren , das Spiel beenden
                    if (memoryCards.every(card => card.pop === true)) {
                        setMatchOver(true);
                    }
                }, 500)
            }

            // Die Werte der Karten zurücksetzen
            setHasFirstCardFlipped(false);
            setCachedCard(null);

            // Die Karten zurückdrehen
            setTimeout(() => {
                cachedCard.callback(false);
                callback(false);
            }, 1000)
        } else {
            // Die Karte der cachedCart Variable zuweisen
            // Die Variable hasFirstFlipped auf true setzen
            setCachedCard({card, callback});
            setHasFirstCardFlipped(true);
        }
    }

    // Checken ob die IDs der Karten übereinstimmen
    const cardsMatch = (card1, card2) => {
        return card1.id === card2.id;
    }

    // Das Spiel neu laden
    const resetGame = () => {
        window.location.reload(false);
    }

    return (
        <div>
            {/* Der Spielscore */}
            <div className="scoreboard">
                <div className="score">{score}</div>
                <button className='btn' onClick={resetGame}>reset</button>
            </div>
            {/* Das Spielbrett */}
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
