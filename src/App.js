import { useState, useEffect } from 'react'
import drumArray from './Assets/drumLists'

const App = () => {

  const [note0, setNote0] = useState(null)

  useEffect(() => {
    document.addEventListener('keydown', e=>playSound(e))
    return document.removeEventListener('keydown', e=>playSound(e))
  }, [])

  useEffect(() => {
    setTimeout(() => setNote0(null), 1000);
  }, [note0])
  
  const playSound = (x) => {
    const note1 = drumArray.find(y => y.keyCode === x.keyCode)
    if (note1) {
      setNote0(note1)
      const sound0 = document.getElementById(note1.keyTrigger)
      sound0.play()
    }
  }

  const playSound0 = (x) => {
    const note2 = document.getElementById(x.keyTrigger)
    note2.play()
    setNote0(x)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <p>{note0 && note0.id}</p>
        </div>
        <div id="drum-box">
          {drumArray.map(x => (
            <div
              className="drum"
              key={x.id}
              onClick={()=>playSound0(x)}
            >{x.keyTrigger}
              <audio className="clip" id={x.keyTrigger}>
                <source src={x.url}></source>
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App