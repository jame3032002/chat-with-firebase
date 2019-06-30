import styled from 'styled-components'

const CircleImage = styled.div`
  background-image: url(${props => props.imageURL});
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  background-size: cover;
`

export default CircleImage