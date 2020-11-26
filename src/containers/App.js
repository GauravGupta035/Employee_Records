import React, { Component } from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation/Navigation';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          employees: [],
          searchfield: '',
          route: 'signin',
          isSignedIn: false,
      }
  }

  // For fetching Robots 
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({employees: users}));
  }

  // For search
  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })       
  }

  // Navigation between signin and home
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    }
    else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
      this.setState({route: route})
  }

  render() {
      const { employees, searchfield, isSignedIn, route } = this.state;
      const filteredEmployees = employees.filter(employee => {
          return employee.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      // Check whether there are any cards present/loaded
      return !employees.length ? <h1 className='tc'>Loading</h1>
          :  (
          <div className='tc'>
            {/* To check whether the user is signed in or not and navigates according to it. */}
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            { route === 'home'
              ? <div>
                  <h1 className='f1'>Employee Records</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                          <CardList employees={ filteredEmployees } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
              : (
                  route === 'signin'
                  ? <SignIn onRouteChange={this.onRouteChange}/>
                  : <Register onRouteChange={this.onRouteChange}/>
                )
            }
          </div>
      );
  }  
}

export default App;