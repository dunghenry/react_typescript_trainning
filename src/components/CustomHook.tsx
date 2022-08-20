import React from 'react';
import axios from 'axios';
interface IActionType {
    type: string;
    loading?: boolean;
    error?: boolean;
    data?: Array<any> | [];
}

const initialState = {
    data: [],
    loading: false,
    error: false,
}
interface IState {
    data: Array<any>,
    loading: boolean,
    error: boolean,
}
type IReducer = [
    state: IState,
    dispatch: (action: IActionType) => void
]

const useReducer = (reducer: Function, initialState: IState): IReducer => {
    const [state, setState] = React.useState<typeof initialState>(initialState);
    function dispatch(action: IActionType): void {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [state, dispatch];
}
const fetchReducer = (state: typeof initialState, action: IActionType) => {
    switch (action.type) {
        case 'fetch/start':
            return {
                ...state,
                loading: action.loading,
            }
        case 'fetch/success':
            return {
                ...state,
                loading: action.loading,
                data: action.data,
            }
        case 'fetch/failed':
            return {
                ...state,
                loading: action.loading,
                data: action.data,
                error: action.error,
            }
        default:
            return state
    }
}

export const useFetch = (url: string) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);
    React.useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetch/start',
                loading: true,
            })
            try {
                const response = await axios.get(url);
                dispatch({
                    type: 'fetch/success',
                    data: response.data,
                    loading: false
                })
            } catch (error) {
                dispatch({
                    type: 'fetch/failed',
                    data: [],
                    loading: false,
                    error: true,
                })
            }
        })()
    }, [url]);
    return { ...state };
}

