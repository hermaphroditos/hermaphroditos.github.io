import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import {Container } from "react-bootstrap";
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewNote } from './components/NewNote';
import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import List from './components/List';
import CounterTwo from './components/CounterTwo';

interface User {
  id: number,
  username: string,
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  console.log(n)
  if(n < 2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number = 4

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(()=> {
    console.log('mounting')
    return () => console.log('unmounting')
  }, [users])

  // const addTwo = userCallback((_e: any): void => setCount(prev => prev + 1),[])

  const result = useMemo<number>(() => fib(myNum), [myNum])


  return (
    <div className="App">
      <Container className="my-4">
        <header className="App-header">
          <Heading title="hello"/>
          {/* <Counter setCount={setCount} >{count}</Counter> */}
          <CounterTwo>{(num: number) => <>Current Count: {num}</>}</CounterTwo>
        </header>
        <div>
          <Section title='undertitle' children='children here' />
          <List items={["coffee","tacos","code"]} render={(item:string) => <span>{item}</span>} />
          {/* <label>Ref</label><input ref={inputRef} type="text" /> */}
        </div>
      </Container>
    </div>
  );
}

export default App;
function userCallback(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

