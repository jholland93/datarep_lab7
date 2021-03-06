import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';//using 'as' simplifies BrowseRouter, meaning when we need to access this we can just type 'Router'
import { Create } from './components/create';
import { Read } from './components/read';


//In order to become a component, the class must extend Component
class App extends Component {
  //render method must be added due to adding a class
  render(){
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar> 
        <br />
        <Switch>
          <Route path = '/' component={Content} exact/> {/* by specifying path, path must be exactly this to display component */}
          <Route path = '/create' component={Create} exact/>
          <Route path = '/read' component={Read} exact/>
        </Switch>
        
      </div>
      </Router>
    );
  }//end render method
}//end class

export default App;
