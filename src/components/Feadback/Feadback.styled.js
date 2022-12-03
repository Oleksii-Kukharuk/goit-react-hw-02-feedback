import styled from 'styled-components';

export const Wraper = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: ${props => {
    if (props.children === 'Good') {
      return 'green';
    }
    if (props.children === 'Bad') {
      return 'red';
    }
    if (props.children === 'Neutural') {
      return 'orange';
    }
  }};
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: ${props => {
      if (props.children === 'Good') {
        return 'darkgreen';
      }
      if (props.children === 'Bad') {
        return 'darkred';
      }
      if (props.children === 'Neutural') {
        return 'tomato';
      }
    }};
  }
  &:active {
    background-color: ${props => {
      if (props.children === 'Good') {
        return 'darkgreen';
      }
      if (props.children === 'Bad') {
        return 'darkred';
      }
      if (props.children === 'Neutural') {
        return 'tomato';
      }
    }};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
