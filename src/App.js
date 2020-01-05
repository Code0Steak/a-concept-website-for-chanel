import React from 'react';

import './App.css';

import HomePage from "./pages/homepage/homepage.component"

import Shop from "./pages/shop/shop.component"

import {Switch, Route} from "react-router-dom"

import Header from "./components/header/header.component"

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import {auth} from "./firebase/firebase.utils"



class App extends React.Component {

    constructor(){
      super();

      this.state = {
        currentUser: null
      }

    }

    unsubscribeFromAuth = null;

    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async (user) => {
      
          this.setState({currentUser: user});
          console.log(user);
      });
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render(){
      return (
        <div className="App">
          <Header currentUser ={this.state.currentUser} />
          <Switch>
            <Route exact path = "/" component = {HomePage}></Route>
            <Route exact path = "/Shop" component = {Shop}></Route>
            <Route exact path = "/SignIn" component = {SignInAndSignUp}></Route>
          </Switch>
        </div>
      );
    }
  
}

export default App;