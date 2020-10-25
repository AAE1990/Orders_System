import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuNav from './components/MenuNav/MenuNav';
import { Route, Switch } from 'react-router-dom';
import MakeOrderContainer from './components/MakeOrder/MakeOrderContainer';
import ListOrderContainer from './components/ListOrders/ListOrderContainer';


function App() {
  return (
    <div className="app-wrapper">

      <div className='app-wrapper-content'>
        <MenuNav/>
        <Switch>
          <Route path="/makeorder" render={() => <MakeOrderContainer />} />
          <Route path="/listorders" render={() => <ListOrderContainer/>} />          
        </Switch>
      </div>

    </div>
  );
}

export default App;
