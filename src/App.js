import drumArray from './drumLists'
import { useState, useEffect } from 'react'

import DrumBox from './DrumBox'
import Display from './Display'

const App = () => {

  const [note0, setNote0] = useState(null)

  useEffect(() => {
    window.addEventListener('keydown', e=>playSound(e))
    return window.removeEventListener('keydown', e=>playSound(e))

  }, [])

  const playSound = (x) => {
    const note1 = drumArray.find(y => y.keyCode === x.keyCode)
    if (note1) {
      setNote0(note1)
      const sound0 = new Audio(note1.url)
      sound0.play()
    }
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <Display note0={note0}/>
        <DrumBox
          drumArray={drumArray}
          playSound={playSound} />
      </div>
    </div>
  )
}

export default App
