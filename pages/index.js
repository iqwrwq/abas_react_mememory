import Image from "next/image";
import memoryCard1 from '../public/memoryCards/memoryCard-1.png'
import memoryCard2 from '../public/memoryCards/memoryCard-2.png'
import memoryCard3 from '../public/memoryCards/memoryCard-3.png'
import memoryCard4 from '../public/memoryCards/memoryCard-4.png'
import memoryCard5 from '../public/memoryCards/memoryCard-5.png'
import memoryCard6 from '../public/memoryCards/memoryCard-6.png'
import memoryCard7 from '../public/memoryCards/memoryCard-7.png'
import memoryCard8 from '../public/memoryCards/memoryCard-8.png'
import memoryCardCover from '../public/memoryCards/memoryCard-cover.png'

import ReactCardFlip from "react-card-flip";
import {useState} from "react";

export default function Home() {
    const memoryCards = [
        memoryCard1, memoryCard1,
        memoryCard1, memoryCard1,
        memoryCard1, memoryCard1,
        memoryCard1, memoryCard1,
        memoryCard1, memoryCard1,
        memoryCard1, memoryCard1,
        memoryCard1, memoryCard1,
        memoryCard1, memoryCard1
    ]

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    const [shuffle, doShuffle] = useState(shuffleArray(memoryCards))

    const [flip, setFlip] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setFlip(!flip);
    }


    return (
        <div>
            <div className="scoreboard">
                <div className="score"></div>
            </div>
            <div className='game'>
                {memoryCards.map((card, index) => (
                    <div onClick={handleClick} key={index}>
                        <ReactCardFlip isFlipped={flip} >
                            <Image src={memoryCardCover} key='front'/>
                            <Image src={card} key='back'/>
                        </ReactCardFlip>
                    </div>
                ))}
            </div>
        </div>
    )
}
