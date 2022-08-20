import React, { createContext } from 'react';
interface IProps {
    children: React.ReactNode
}
export interface IContext {
    name: string;
    author: string;
    url: string;
}
export const AppContext = createContext<IContext | null>(null);
const Context: React.FC<IProps> = ({ children }) => {
    const valueContext: IContext = {
        name: "Using React Context in a Typescript App",
        author: "thehappybug",
        url: "http://www.example.com",
    }
    return (
        <AppContext.Provider value={valueContext}>
            {children}
        </AppContext.Provider>
    )
}

export default Context