import React, { Component } from 'react';
import CardList from './CardList';
import Searchbar from './Searchbar';
import { members} from './members';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      members: members,
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ members: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { members, searchfield } = this.state;
    const filteredRobots = members.filter(members =>{
      return members.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !members.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <Searchbar searchChange={this.onSearchChange}/>
            <CardList members={filteredRobots} />
        </div>
      );
  }
}

export default App;