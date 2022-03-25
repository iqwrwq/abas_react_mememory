import Image from "next/image";
import memoryCard1 from '../public/memoryCards/memoryCard-1.png'
import memoryCard2 from '../public/memoryCards/memoryCard-2.png'
import memoryCard3 from '../public/memoryCards/memoryCard-3.png'
import memoryCard4 from '../public/memoryCards/memoryCard-4.png'
import memoryCard5 from '../public/memoryCards/memoryCard-5.png'
import memoryCard6 from '../public/memoryCards/memoryCard-6.png'
import memoryCard7 from '../public/memoryCards/memoryCard-7.png'
import memoryCard8 from '../public/memoryCards/memoryCard-8.png'
import memoryCard9 from '../public/memoryCards/memoryCard-9.png'

export default function Home() {
    return (
        <div>
            <div className="scoreboard">
                <div className="score"></div>
            </div>
            <div className="game">
                <Image className='memoryCard' src={memoryCard1} alt="mem1"/>
                <Image className='memoryCard' src={memoryCard2} alt="mem2"/>
                <Image className='memoryCard' src={memoryCard3} alt="mem3"/>
                <Image className='memoryCard' src={memoryCard4} alt="mem4"/>
                <Image className='memoryCard' src={memoryCard5} alt="mem5"/>
                <Image className='memoryCard' src={memoryCard6} alt="mem6"/>
                <Image className='memoryCard' src={memoryCard7} alt="mem7"/>
                <Image className='memoryCard' src={memoryCard8} alt="mem8"/>
                <Image className='memoryCard' src={memoryCard9} alt="mem9"/>
            </div>
        </div>
    )
}
