import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {


  render() {

    return (
      <div >

        <Navbar title="User App" />
        <hr />

        <Users />

      </div>
    );
  }
}

export default App;
