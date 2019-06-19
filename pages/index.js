import styled from 'styled-components'

import Head from '../components/Head'

export default () => (
  <div>
    <Head title='kajame' />
    <Title>Style components</Title>
  </div>
)

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;