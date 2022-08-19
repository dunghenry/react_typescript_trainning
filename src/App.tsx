import React from 'react'
import Effect from './components/Effect'
import Reducer from './components/Reducer'
import TypeProps from './components/TypeProps'
const App = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false as boolean);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <h1>My App</h1>
      <TypeProps name="TranDung" />
      {/* <Reducer/> */}
      {isVisible && <Effect />}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}
export default App