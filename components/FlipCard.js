import Image from "next/image";
import memoryCardCover from "../public/memoryCards/memoryCard-cover.png";
import memoryCardSuccess from "../public/memoryCards/memoryCard-success.png";
import ReactCardFlip from "react-card-flip";
import {useEffect, useState} from "react";


export default function FlipCard(props) {
    // Eine Variable für den Flip effekt
    const [flip, setFlip] = useState(true);

    // Eine Methode für den flip, ruft zusätzlich im Parent eine Methode auf
    const doFlip = (e) => {
        setFlip(true);
        e.preventDefault();
        props.handleClick(props.card, setFlip);
    }

    // Eine initiale zurücksetzung auf flip(false)
    useEffect(() => {
        setTimeout(() => {
            setFlip(false);
        }, Math.floor(Math.random() * (2000 - 1600 + 1)) + 1600)
    }, [])

    return (
        <div onClick={doFlip}>
            {props.card.pop ?
                <Image className="successCard" src={memoryCardSuccess}/> :
                <ReactCardFlip isFlipped={flip}>
                    <Image src={memoryCardCover} key='front'/>
                    <Image src={props.card.image} key='back'/>
                </ReactCardFlip>
            }
        </div>
    )
}