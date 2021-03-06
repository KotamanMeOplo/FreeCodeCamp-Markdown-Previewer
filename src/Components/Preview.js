import React, { Component } from 'react';
import styled from 'styled-components';
import { WindowWrapper, WindowHeader } from './StyledComponents';

const WindowContentWrapper = styled.div`
  border: 1px solid rgba(27,31,35,0.15);
  border-radius: 0 0 3px 3px;
  height: 600px;
  padding: 10px;
  overflow: scroll;
`;

export default class Preview extends Component {
  render() {
    return (
      <WindowWrapper>
        <WindowHeader>Preview</WindowHeader>
        <WindowContentWrapper id='preview' dangerouslySetInnerHTML={{__html:this.props.markdown}} />
      </WindowWrapper>
    )
  }
}