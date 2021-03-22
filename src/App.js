import './App.css';
import gsap from 'gsap';
import Header from './components/Header/Header';
import Home from './components/Home';
import React, { useEffect } from 'react';
import { Route } from 'react-router';
import Navigation from './components/Navigation/Navigation';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <Header dimensions={dimensions} />
      <div className='App'>
        <Route exact path='/' component={Home} />
      </div>
      <Navigation />
    </React.Fragment>
  );
}

export default App;
