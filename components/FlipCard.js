import Image from "next/image";
import memoryCardCover from "../public/memoryCards/memoryCard-cover.png";
import memoryCardSuccess from "../public/memoryCards/memoryCard-success.png";
import ReactCardFlip from "react-card-flip";
import {useEffect, useState} from "react";


export default function FlipCard(props) {
    const [flip, setFlip] = useState(true);

    const doFlip = (e) => {
        setFlip(true);
        e.preventDefault();
        props.handleClick(props.card, setFlip);
    }

    useEffect(() => {
        setTimeout(() => {
            setFlip(true);
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