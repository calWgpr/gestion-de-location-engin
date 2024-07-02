import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import './js/bootstrap.min.js';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './Components/Header.js'
import Nav from './Components/nav.js';
import Body from './Components/body.js';
import Quest from './Components/quest.js';
import ListEngin from './Components/list.js';


function App() {
  return (

      <Router>
        <div className="Container ">
          
              <div className='header '>
                <Header/>
              </div>
              <div className='nav '>
                <Nav/>
              </div>
            <div className='quest'>
                <Quest/>
            </div>
            <switch>
                <div className=' body'>
                  <Route exact path="/">
                    <Body/>
                  </Route>
                </div>
                <div className=' listTruck'>
                  <Route exact path="/list">
                    <ListEngin/>
                  </Route>
                </div>

            </switch>
               

            <div className='footerbg-info'>
                FOOTER
            </div>      
        </div>
      </Router>  
  );
}

export default App;
