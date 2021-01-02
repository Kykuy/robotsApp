import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import  ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response = response.json())
    .then(users => {
      this.setState({
        robots: users,
      });
    });    
  }

  onSearchInputChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });    
  }

  render() {
    const { robots, searchInput } = this.state;
    const foundRobots = robots.filter(robot => {

      return (robot.name
      .toLowerCase()
      .startsWith( searchInput.toLowerCase() )
      ||
      robot.name
      .toLowerCase()
      .includes( searchInput.toLowerCase() )
      );
      
    });

    if (robots.length < 1) {
      return (
        <h1 className = 'tc f2'>LOADING</h1>
      );
    }

    return (      
    <div className = "wrapper tc">
      <h1 className = 'title'>Robofriends</h1>
      <SearchBox onInput = {this.onSearchInputChange}/>
      <Scroll>
        <ErrorBoundary>
        	<CardList robots = {foundRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>   
    );
  }
  
}

export default App;