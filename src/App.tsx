import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Continent from './components/Continent';
import Continents from './components/Continents';
import Home from './Pages/Home';

import './App.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/continents' component={Continents} />
            <Route path='/continents/:code' component={Continent} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
