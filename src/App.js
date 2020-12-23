import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import './global.css'
/* Rotas */
import Home from './pages/home/'
import DescPage from './pages/descPage'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:id" component={DescPage}/>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
