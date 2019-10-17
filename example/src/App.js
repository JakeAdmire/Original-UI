import React, { Component } from 'react'

import { TextInput, Icon } from 'original-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <TextInput placeholder="test" />
        <Icon name='skull' />
      </div>
    )
  }
}
