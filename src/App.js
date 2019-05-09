import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/layout/AppNavBar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';


import './App.css';

function App() {

  const { client } = this.props;
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <AppNavbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/client/add" component={AddClient}></Route>
          <Route exact path={`/client/${client.id}`} component={ClientDetails}></Route>
          
        </Switch>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
