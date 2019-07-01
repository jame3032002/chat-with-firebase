import styled from 'styled-components'

const CircleImage = styled.img`
  display: block;
  height: ${props => props.size || 30}px;
  width: ${props => props.size || 30}px;
  border-radius: 50%;
`

export default CircleImage