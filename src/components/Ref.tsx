import React from 'react'

const Ref = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    React.useEffect(() =>{
        inputRef.current?.focus();
    })
  return (
    <div>
        <input ref={inputRef}/>
    </div>
  )
}

export default Ref