import React, { Component } from 'react';
import Editor from './Components/Editor.js';
import Preview from './Components/Preview.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-content: center;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Editor />
        <Preview />
      </Wrapper>
    );
  }
}
