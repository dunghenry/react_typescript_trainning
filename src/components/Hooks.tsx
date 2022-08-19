import React from 'react'
interface IUser {
    id: number;
    name: string;
}
const Hooks = () => {
    const [isLogin, setIsLogin] = React.useState<boolean | null>(false as boolean);
    const [user, setUser] = React.useState<IUser>({ id: 1, name: 'user' } as IUser);
    return (
        <div>Hooks</div>
    )
}

export default Hooks