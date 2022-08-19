import React from "react";
type IActionType =
    | { type: "increment"; payload: number | string }
    | { type: "decrement"; payload: string | number };
interface IState {
    count: number;
}
const initialState: IState = {
    count: 0,
};

const logger = (reducer: Function) => {
    return (prevState: typeof initialState, action: IActionType) => {
        console.group(action.type);
        console.log("PrevState : ", prevState);
        console.log("Action : ", action);
        const newState = reducer(prevState, action);
        console.log("NewState : ", newState);
        console.groupEnd();
        return newState;
    }
}
const reducer = (state: typeof initialState, action: IActionType) => {
    switch (action.type) {
        case "increment":
            return {
                count: (state.count + +action.payload),
            };
        case "decrement":
            return {
                ...state,
                count: (state.count - (+action.payload)), //parse to number
            };
        default:
            throw new Error("Invalid action");
    }
};
const Reducer = () => {
    const [state, dispatch] = React.useReducer(logger(reducer), initialState);
    const handleIncrease = () => {
        dispatch({ type: "increment", payload: 1 });
    }
    const hanldleDecrease = () => {
        dispatch({ type: "decrement", payload: "1" });
    }
    return (
        <div>
            <h1>Hook Reducer</h1>
            <h2>{state.count}</h2>
            <button onClick={handleIncrease}>increment</button>
            <button onClick={hanldleDecrease}>decrement</button>
        </div>
    );
};

export default Reducer;
