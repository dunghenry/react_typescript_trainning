import { useContext } from "react"
import { AppContext, IContext } from "./Context"

const ChildComponent = () => {
    const data: IContext | null = useContext(AppContext);
    const { name, author, url } = {...data}
    return (
        <div>
            <h1>ChildComponent</h1>
           <p>{name}</p>
           <p>{author}</p>
           <p>{url}</p>
        </div>
    )
}

export default ChildComponent