import { useState } from "react";

type GreetingProps = {
    name: string;
    age: number;
}

function Greeting({name, age}: GreetingProps) {
    const [inputValue, setInputValue] = useState<any>();
  return (
    <>
    <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
    <div>Greeting: {name}, {age} year old</div>
    <div>{inputValue}</div>
    </>
  )
}

export default Greeting