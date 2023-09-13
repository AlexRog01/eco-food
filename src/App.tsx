import './App.css';

import React from 'react';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>

      <div className="app__main">
        <Main />
      </div>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
