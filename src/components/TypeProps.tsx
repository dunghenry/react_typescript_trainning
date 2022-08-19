import React from 'react'
interface IProps {
    name: string;
}
//? or
type IPropss = {
    children?: React.ReactNode
}

interface IUser {
    _id: string
    username: string
    age: number
}

const Component = ({ name }: IProps) : JSX.Element => <div>{name}</div>

const TypeProps = (props: IProps) => {
    // const TypeProps = ({} : IProps) => {
    // const TypeProps: React.FC<IProps> = () => {

    const [count, setCount] = React.useState<number>(0);
    const [title, setTitle] = React.useState<string | undefined>("");
    const [user, setUser] = React.useState<IUser>({
        _id: "1234",
        username: "User",
        age: 20
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    // }
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1>TypeProps</h1>
            <p>{title && title}</p>
            <input value={title} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
            <Component name="TranDung"/>
        </div>
    )
}

export default TypeProps