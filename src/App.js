import React, { Component } from 'react';
import Editor from './Components/Editor.js';
import Preview from './Components/Preview.js';
import styled from 'styled-components';
import marked from 'marked';
import './markdown.css';

const Wrapper = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;

  @media only screen and (max-width: 950px){
    flex-direction: column;
  }
`;

export default class App extends Component {
  static defaultProps = {
    defaultText: 
`# Object Oriented Programming
## Or also known as OOP
[Here's a Wikipedia article](https://en.wikipedia.org/wiki/Object-oriented_programming)

You can do a lot of interesting things with OOP like creating a cat object with a bunch of properties like color, name and gender
\`\`\`js
let cat = {
  color: 'white',
  name: 'Milko',
  gender: 'Male'
};
\`\`\`
You can also change its properties like so:

\`cat.name = 'Mouse Terminator 3000';\`

![alt text](http://static.tunnel.ru//media/images/2016-08/post/92294/1352990445203306_orig.jpg)

Some Object Oriented Programming Languages are:
- C++
- Java
- Python
- Ruby

> Object-oriented design is the roman numerals of computing.
> 
> **ROB PIKE**
`
  }

  state = {
    text: this.props.defaultText,
    markdown: marked(this.props.defaultText)
  };

  handleChange = e => {
    this.setState({
      markdown: marked(e.target.value),
      text: e.target.value
    });
  }

  render() {
    return (
      <Wrapper className="App">
        <Editor changeHandler={ this.handleChange } text={ this.state.text } />
        <Preview markdown={ this.state.markdown } />
      </Wrapper>
    );
  }
}
