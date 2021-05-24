import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import { AppProvider } from '../context/AppContext';
import '../styles/global.css';

const App: React.FC = () => (
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </AppProvider>
);

export default App;
