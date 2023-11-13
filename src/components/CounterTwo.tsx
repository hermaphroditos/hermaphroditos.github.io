import { ReactNode, useState, useReducer, ChangeEvent } from 'react'

// type CounterProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>,
//   children: ReactNode
// }

type ChildrenType = {
  children: (num:number) => ReactNode
}

const initState = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string,
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1}
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {...state, count: state.count - 1}
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return {...state, text: action.payload ?? ''}
    default: 
      throw new Error()
  }
}

const CounterTwo = ({children}: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
  const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value
    })
  }

  return (
    <div> 
      <h2>Counter : {children(state.count)} </h2>
      <h2>{state.text}</h2>
      {/* <button onClick={() => setCount(prev => prev + 1)}>+</button> */}
      {/* <button onClick={() => setCount(prev => prev - 1)}>-</button> */}
    </div>
  )
}

export default CounterTwo