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

## Components

### TextInput

#### Usage:

```javascript
import { TextInput } from  'original-ui'

<TextInput  placeholder="Why don't you enter some text..."  />
```

#### Result:

<img width="761" alt="Screen Shot 2019-10-16 at 5 32 17 PM" src="https://user-images.githubusercontent.com/44077214/66966579-f45cc280-f03a-11e9-9e92-9583aea23906.png">


#### Parameters:

|Parameter| Data Type | Default Value | Description |
|--|--|--|--|
| `placeholder` | `String` | `null` | _pass a string to display as a placeholder_ |
| `vanishingPlaceholder` | `Boolean` | `true` | _pass a boolean to determine whether you want the placeholder text to fade on focus_ |
| `width` | `String` | `100%` | _pass a string to constrict the component's width_ |
| `height` | `String` | `50px` | _pass a string to constrict the component's height_ |
| `fontsize` | `String` | `16px` | _pass a string to constrict the component's font size_ |
| `showShadow` | `Boolean` | `true` | _pass a boolean to determine whether you want the component to display a drop shadow_ |
| `border` | `String` | `orangered` | _pass a string to set the component's border color_ |
| `radius` | `String` | `10px` | _pass a string to set the component's border radius_ |
| `changeMethod` | `Function` | `null` | _pass a method that will receive the `event` object as a parameter_ |
---

## License

MIT © [JakeAdmire](https://github.com/JakeAdmire)
