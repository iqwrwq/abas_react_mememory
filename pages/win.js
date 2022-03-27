import Image from "next/image";
import winImage from '../public/win.png';

export default function win(){
    return(
        <div className="center">
            <Image src={winImage} />
        </div>
    );
}