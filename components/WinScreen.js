export default function WinScreen(props) {
    return (
        <>
            <div className="pyro">
                <div className="before"></div>
                <div className="after"></div>
            </div>
            <div className='center winScreen'>

                <h1>You Won !</h1>
                <h3>another one ?</h3>
                <button className='btn' onClick={props.reset}>reset</button>
            </div>
        </>
    )
}