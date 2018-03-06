import React, { Component } from 'react';
import './App.css';
// import { Progress } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BreedDetails from './Components/Breeds/BreedDetail';
import Home from './Components/Home/Home';
import AddNew from './Components/Admin/AddNew';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/breed/:id' component={BreedDetails} />
            <Route path='/add' component={AddNew} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
