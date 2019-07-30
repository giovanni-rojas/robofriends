import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
	constructor(){
		super();			//call Component constructor
		this.state = {		//grab state from robots object
			robots: robots,
			searchfield: ''
		}
	}


	onSearchChange = (event) => {			//arrow function when making components so React makes sure that 'this' refers to where we're at (app) 
		this.setState( { searchfield: event.target.value } )
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>	
				<CardList robots={ filteredRobots }/>			{/* send in state as prop */}
			</div>
		);
	}
}

export default App;