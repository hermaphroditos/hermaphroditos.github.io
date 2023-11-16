import React, { useEffect, useState } from 'react';
import {Container } from "react-bootstrap";
import { Routes, Route, Navigate } from 'react-router-dom';
import { NewNote } from './components/NewNote';
import Heading from './components/Heading';
import { Section } from './components/Section';
import Counter from './components/Counter';
import List from './components/List';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Landing from './pages/Landing';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const queryProps = {
  query: "(min-width: 1060px)"
}

function App() {
  
  // page selection
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery(queryProps);
  const pageProps = {
    page: 'home',
    selectedPage: selectedPage,
    setSelectedPage: setSelectedPage
  };

  // counter setup
  const [count, setCount] = useState<number>(1)

  // to top of the webpage
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="app bg-deep-blue">
      <div className='app-header'>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> 
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        {/* <Section title='undertitle' children='children here' /> */}
        {isAboveMediumScreens && (<DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />)}
        <Landing selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        {/* <List items={["coffee","tacos","code"]} render={(item:string) => <span>{item}</span>} /> */}
        <Skills />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Projects />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <footer>
        {/* <Heading title="Hello !"/> */}
        <Counter setCount={setCount} >{count}</Counter>
      </footer>
    </div>
  );
}

export default App;
