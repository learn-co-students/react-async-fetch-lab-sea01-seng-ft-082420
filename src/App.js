import React, {Component} from 'react';

class App extends Component{

  state = {
    peopleInSpace: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data =>{
      this.setState({
        peopleInSpace: data
      })
    })
  }

  render(){
    return(
      <div>
         {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }
}

export default App