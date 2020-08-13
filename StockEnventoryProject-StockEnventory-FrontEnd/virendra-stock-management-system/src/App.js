import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DisplayComponent from './components/DisplayComponent';
import CreateStockComponent from './components/CreateStockComponent';
import UpdateStockComponent from './components/UpdateStockComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
class App extends React.Component {
  render(){
  return (
          <div>
            <Router>
              <div className="container">
                  <HeaderComponent/>
                    <div className="container">
                      <Switch>
                         <Route path="/" exact component= {DisplayComponent}></Route>
                         <Route path="/stocks" component= {DisplayComponent}></Route>
                         <Route path="/add-stock" component= {CreateStockComponent}></Route>
                         <Route path="/update-stock/:id" component= {UpdateStockComponent}></Route>
                      </Switch>
                    </div>
                 <FooterComponent/>
              </div>
            </Router>
          </div>
    
      
  );
 }

}

export default App;
