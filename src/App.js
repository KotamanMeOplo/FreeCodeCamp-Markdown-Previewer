import React, { Component } from 'react';
import Editor from './Components/Editor.js';
import Preview from './Components/Preview.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <Preview />
      </div>
    );
  }
}
