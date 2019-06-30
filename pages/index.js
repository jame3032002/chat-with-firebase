import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import Head from '~/components/Head'
import Navbar from '~/components/Navbar'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

@inject('store')
@observer
class Index extends Component {
  render () {
    return (
      <Fragment>
        <Head title='kajame' />
        <Navbar />
        <Title>{this.props.store.lastUpdate}</Title>
        <button onClick={() => this.props.store.start()}>Start</button>
      </Fragment>
    )
  }
}

export default Index
