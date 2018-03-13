import React, { Component } from 'react';
// import { Progress } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BreedDetails from './Components/Breeds/BreedDetail';
import Home from './Components/Home/Home';
import AddNew from './Components/Admin/AddNew';
import AdminHome from './Components/Admin/AdminHome';
import Update from './Components/Admin/Update';

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
