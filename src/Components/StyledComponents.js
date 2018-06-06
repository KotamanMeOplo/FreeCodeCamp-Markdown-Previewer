import styled from 'styled-components';

const WindowWrapper = styled.div`
  top: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 45%;

  @media only screen and (max-width: 950px){
    width: 100%;
  }
`;

const WindowHeader = styled.h3`
  background-color: #f6f8fa;
  margin: 0;
  padding: 9px 10px 10px;
  border: 1px solid rgba(27,31,35,0.15);
  border-radius: 3px 3px 0 0;
  border-bottom: 0;
`;

export { WindowWrapper, WindowHeader};