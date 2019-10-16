# original-ui

> 

[![NPM](https://img.shields.io/npm/v/original-ui.svg)](https://www.npmjs.com/package/original-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save original-ui
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'original-ui'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

### Components

#### TextInput

**Parameters**
- placeholder: 
  Data Type: `String`
  Default: `null`
  _pass a string to display as a placeholder_
- vanishingPlaceholder: 
  Data Type: `Boolean` 
  Default: `true`
  _pass a boolean to determine whether you want the placeholder text to fade on focus_
- width: 
  Data Type: `String`
  Default: `100%`
  _pass a string to constrict the component's width_
- height: 
  Data Type: `String`
  Default: `50px`
  _pass a string to constrict the component's height_
- fontsize:
  Data Type: `String`
  Default: `16px`
  _pass a string to constrict the component's font size_
- showShadow: 
  Data Type: `Boolean`
  Default: `true`
  _pass a boolean to determine whether you want the component to display a drop shadow_
- border: 
  Data Type: `String`
  Default: `orangered`
  _pass a string to set the component's border color_
- radius: 
  Data Type: `String`
  Default: `10px`
  _pass a string to set the component's border radius_
- changeMethod:
  Data Type: `Function`
  Default: `null`
  _pass a method that will recieve the `event` object as a parameter_

## License

MIT © [JakeAdmire](https://github.com/JakeAdmire)
