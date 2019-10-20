import React, { Component } from 'react'

import { TextInput, Icon } from 'original-ui'

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
        <TextInput 
          placeholderText='ex. "thoughtfulpassword123..."'
          labelText='Enter your password:' 
          isPassInput={this.state.isTextHidden}
          rightIcon={
            <Icon 
              iconName={this.state.isTextHidden ? 'eye' : 'eye-slash'}
              iconSize='24px'
              onPress={this.toggleHiddenText}
            />
          }
        />
      </div>
    )
  }
}
