const DrumBox = ({ drumArray, playSound }) => {
    return (
        <div id="drum-box">
            {drumArray.map(x => (
            <div
                className="drum"
                key={x.id}
                onClick={()=>playSound(x)}
            >{x.keyTrigger}
                <audio src={x.url} className="clip" id={x.keyTrigger}/>{/* it doesn't seem we need this, but for the tests*/}
            </div>
            ))}
        </div>
    )
}
export default DrumBox