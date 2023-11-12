import { ReactNode, useState } from 'react'

// 컴포넌트 위에서 Props 타입을 명시
type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
}

// 위에서 명시한 타입 오브젝트를 파라미터의 타입 명시 부분에 할당
const Counter = ({setCount, children}: CounterProps) => {
  return (
    <div> 
      <h2>Counter : {children} </h2>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  )
}

export default Counter