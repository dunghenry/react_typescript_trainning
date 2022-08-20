import React from 'react'
type ButtonProps = React.HTMLProps<HTMLButtonElement>
const ChildRef = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <button type="button" ref={ref}>
        {props.children}
    </button>
))

export default ChildRef
