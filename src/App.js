import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monster: users}))
  }

  render() {

    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
    <div className="App">
      <input 
        type='search' 
        placeholder='search hear' 
        onChange={e => {
          this.setState({searchField: e.target.value},
          () =>  console.log(this.state)
          );
        }} 
      />
      <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
