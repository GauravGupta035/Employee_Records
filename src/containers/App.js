import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import Particles from 'react-particles-js';

const particleOptions = {
    particles: {
      number: {
        value: 1000,
        density: {
          enable: true,
          value_area: 1000
        }
      }
    }
  }

class App extends Component {
  constructor() {
      super();
      this.state = {
          employees: [],
          searchfield: '',
      }
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({employees: users}));
  }

  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })       
  }

  render() {
      const { employees, searchfield } = this.state;
      const filteredEmployees = employees.filter(employee => {
          return employee.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return !employees.length ? <h1 className='tc'>Loading</h1>
          :  (
          <div className='tc'>
              <Particles className='particles'
                param={particleOptions}
              />
              <h1 className='f1'>Employee Records</h1>
              <SearchBox searchChange={this.onSearchChange} />
              <Scroll>
                  <ErrorBoundary>
                    <CardList employees={ filteredEmployees } />
                  </ErrorBoundary>
              </Scroll>
          </div>
      );
  }  
}

export default App;