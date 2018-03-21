import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BreedDetails from './Components/Breeds/BreedDetail';
import Home from './Components/Home/Home';
import AddNew from './Components/Admin/AddNew';
import AdminHome from './Components/Admin/AdminHome';
import Update from './Components/Admin/Update';
import Explore from './Components/Explore';
import Quiz from './Components/Quiz/Quiz';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/breed/:id' component={BreedDetails} />
            <Route path='/add' exact component={AddNew} />
            <Route path='/admin' exact component={AdminHome} />
            <Route path='/update/:id' component={Update} />
            <Route path='/explore' component={Explore} />
            <Route path='/quiz' component={Quiz} />
            <Route path='/about' component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
