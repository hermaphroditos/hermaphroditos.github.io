import React, { useState } from 'react';
import {Container } from "react-bootstrap";
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewNote } from './components/NewNote';
import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import List from './components/List';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';

const queryProps = {
  query: "(min-width: 1060px)"
}

function App() {
  
  // page selection
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery(queryProps);
  const pageProps = {
    page: 'home',
    selectedPage: selectedPage,
    setSelectedPage: setSelectedPage
  };

  const [count, setCount] = useState<number>(1)

  return (
    <div className="App bg-deep-blue">
      <Container className="my-4">
        <header className="App-header">
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> {/* 수정 */}
          <Heading title="Hello !"/>
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
