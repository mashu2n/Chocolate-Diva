import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent'
import './App.css';
import { ITEMS } from './shared/items';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:ITEMS
        }
    }

  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Chocolate Diva</NavbarBrand>
              </div>
              </Navbar>
              <Directory items={this.state.items} />
          </div>
      );
  }
}

export default App;
