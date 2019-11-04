import React, { Component } from 'react'

import { TextInput, Icon, FormLabel } from 'original-ui'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isTextHidden: true
    }
  }

  toggleHiddenText = () => {
    this.setState({
      isTextHidden: !this.state.isTextHidden
    })
  }

  render () {
    return (
      <div>
        <FormLabel
          labelText='Enter your password:'
          context={
            <TextInput 
            placeholderText='ex. "thoughtfulpassword123..."'
            isPassInput={this.state.isTextHidden}
            rightIcon={
              <Icon 
              iconName={this.state.isTextHidden ? 'eye' : 'eye-slash'}
              iconSize='24px'
              onPress={this.toggleHiddenText}
              />
            }
            />
          }
        />
      </div>
    )
  }
}
