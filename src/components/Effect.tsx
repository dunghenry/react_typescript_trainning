import React from 'react'
const Effect = () => {
    const [count, setCount] = React.useState<number>(10 as number);
    React.useEffect(() => {
        setTimeout(() => {
            setCount(count - 1);
        }, 1000);
    }, [count]);
    console.log('Render')
    return (
        <div>
            Hook useEffect
            <p>{count}</p>
        </div>

    )
}

export default Effect