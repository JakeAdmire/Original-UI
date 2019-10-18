import React, { Component } from 'react'

import { TextInput, Icon } from 'original-ui'

export default class App extends Component {
  render () {
    return (
      <div>
        <TextInput 
          placeholder="ex. 'thoughtfulpassword123...'" 
          labelText='Enter your password:' 
          rightIcon={<Icon name='eye-slash' />}
        />
      </div>
    )
  }
}
