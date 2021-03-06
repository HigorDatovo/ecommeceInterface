import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LeftNavbar from './components/LeftNavbar';
import Container from './components/Container';
import Carrinho from './components/Carrinho';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LeftNavbar />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path="/meu-carrinho" component={Carrinho} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
