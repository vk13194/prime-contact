import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/layout/Navbar'
import ContactState from './context/contact/ContactState'
import './App.css'
const App = () => {
  return (
    <ContactState>
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
        </Switch>
      </Fragment>
    </Router>
    </ContactState>
  )
}

export default App
