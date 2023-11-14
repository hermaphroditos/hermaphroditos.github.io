import React, { useState } from 'react';
import {Container } from "react-bootstrap";
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewNote } from './components/NewNote';
import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import List from './components/List';

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <div className="App">
      <Container className="my-4">
        <header className="App-header">
          <Heading title="hello"/>
          <Counter setCount={setCount} >{count}</Counter>
        </header>
        <div>
          <Section title='undertitle' children='children here' />
          <List items={["coffee","tacos","code"]} render={(item:string) => <span>{item}</span>} />
        </div>
      </Container>
    </div>
  );
}

export default App;
