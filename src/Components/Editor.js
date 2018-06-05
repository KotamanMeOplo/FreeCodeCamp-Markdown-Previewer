import React, { Component } from 'react';
import styled from 'styled-components';
import { WindowWrapper, WindowHeader } from './StyledComponents';

const Input = styled.textarea`
  border: 1px solid rgba(27,31,35,0.15);
  border-radius: 0 0 3px 3px;
  resize: none;
  outline: none;
  width: 100%;
  height: 622px;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 10px;
  margin: 0;
`

export default class Editor extends Component {
  render() {
    return (
      <WindowWrapper>
        <WindowHeader>Editor</WindowHeader>
        <Input id="editor" value={ this.props.text } onChange={ this.props.changeHandler } spellCheck={ false } />
      </WindowWrapper>
    );
  }
}