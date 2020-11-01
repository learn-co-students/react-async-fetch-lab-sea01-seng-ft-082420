// create your App component here
import React, {Component} from 'react';

class App extends Component {
    state = {
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(people => this.setState({ people: people.people}))
    }

    render(){
        return <ul>{this.state.people.map(person => <li>{person.name}: {person.craft}</li>)}</ul>
    }
}

export default App;