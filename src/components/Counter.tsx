import { useState } from 'react'
import CustomButton from './Button';

function Counter() {
    const [count, setCount] = useState<number>(0);
  return (
    <>
    <div>Counter: {count}</div>
    <CustomButton label={'Tăng'} onClick={()=>setCount(count+1)} ></CustomButton>
    </>
  )
}

export default Counter