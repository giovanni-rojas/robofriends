import React, { Component } from 'react';
import CardList from './CardList';
//import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
	constructor(){
		super();			//call Component constructor
		this.state = {		//grab state from robots object
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {			//arrow function when making components so React makes sure that 'this' refers to where we're at (app) 
		this.setState( { searchfield: event.target.value } )
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>	
					<Scroll>
						<CardList robots={ filteredRobots }/>			{/* send in state as prop */}
					</Scroll>
				</div>
			);
		}
	}
}

export default App;