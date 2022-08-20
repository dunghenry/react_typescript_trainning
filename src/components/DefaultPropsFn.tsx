import React from 'react'
type IProps = {
  age?: number
} & typeof defaultProps
const defaultProps = {
  age: 24
}
interface IPropss{

}
// const DefaultProps = ({ age = 22 }: IProps) => {
  // const DefaultProps = (props: IPropss & typeof defaultProps) => {
const DefaultProps = (props: IProps) => {
  return (
    <div>
      <h1>DefaultProps</h1>
      {/* {age} */}

      {/* use default props */}
      {props.age}
    </div>
  )
}
DefaultProps.defaultProps = defaultProps;
export default DefaultProps