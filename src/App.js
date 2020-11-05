import React, { Component } from 'react'

class App extends Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(astronauts => this.setState({
                astronauts: astronauts.people
            }))
    }

    render() {
        return(
            <div>
                {this.state.astronauts.map(astronaut => <div key={astronaut.name}>{astronaut.name}</div>) }
            </div>
        )
    }
}

export default App
