import styled from 'styled-components';


const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0.5rem 1rem;
  width: auto;
  min-width:50px;
  text-align:center;
  border: 2px solid white;
  font-weight:bold;
  background: ${props => props.primary ? '#e1de00' : '#183a46' };
  color: ${props => props.primary ? '#183a46' : 'white' }
  
`
export default Button;