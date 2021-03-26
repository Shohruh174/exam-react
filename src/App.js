import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  HomePage,
  Discount,
  Dashboard,
  SettingsPage
} from './pages';

import './assets/main.scss';
import Sidebar from './containers/Sidebar/Sidebar';
import Aside from './containers/Aside/Aside';
import Payment from './containers/Payment/Payment'

function App() {

  // const [ activePage, setActivePage ] = useState('');

  return (
    <Router>
      <div className="App">

        <Sidebar />
        

          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/discount" component={Discount} />
            <Route path="/message" component={Payment} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>


        {/* <Aside/> */}

      </div>
    </Router>
  );
}

export default App;
