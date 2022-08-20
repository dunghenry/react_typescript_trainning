import React from 'react'
import ChildRef from './ChildRef'
const ForwardRef = () => {
    const ref = React.createRef<HTMLButtonElement>();
    React.useEffect(() => {
        const handleClick = () => {
            alert('Click to button');
        };
        const element = ref.current;
        element?.addEventListener('click', handleClick);
    }, [])
    return (
        <div>
            <ChildRef ref={ref}>Click me!</ChildRef>
        </div>
    )
}

export default ForwardRef;