import React, { Component } from 'react';
import './App.css';
//import ListItem from './ListItem'
//import Mylist from './MyList';

class ListItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.doThis}</li>
      </div>
    )
  }
}

export default ListItem