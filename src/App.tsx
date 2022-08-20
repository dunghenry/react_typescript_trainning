import React from 'react'
import ChildComponent from './components/ChildComponent'
import ClassCpn from './components/ClassCpn'
import Context from './components/Context'
import { useFetch } from './components/CustomHook'
import DefaultPropsCl from './components/DefaultPropsCl'
import DefaultPropsFn from './components/DefaultPropsFn'
import Effect from './components/Effect'
import FormEvent from './components/FormEvent'
import ForwardRef from './components/ForwardRef'
import Reducer from './components/Reducer'
import Ref from './components/Ref'
import TypeProps from './components/TypeProps'
const App = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false as boolean);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  }
  const {data : users, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users?_limit=2")
  return (
    <div>
      <h1>My App</h1>
      {/* <TypeProps name="TranDung" /> */}
      {/* <Reducer/> */}
      {isVisible && <Effect />}
      {/* <button onClick={handleToggle}>Toggle</button> */}
      {/* <Ref/> */}
      {/* {JSON.stringify(users)} */}
      {/* <ClassCpn message='Xin chao'/> */}
      {/* <DefaultPropsFn/> */}
      {/* <DefaultPropsCl age={4}/> */}
      {/* <FormEvent /> */}
      {/* <Context><ChildComponent/></Context> */}
      <ForwardRef/>
    </div>
  )
}
export default App