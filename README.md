<h1 align="center">OriginalUI<h1/>

<div align="center">

  [![NPM](https://img.shields.io/npm/v/original-ui.svg)](https://www.npmjs.com/package/original-ui) 
  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>

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

<img width="890" alt="Screen Shot 2019-10-17 at 8 19 12 PM" src="https://user-images.githubusercontent.com/44077214/67060801-7b816780-f11b-11e9-8af7-8ef8c5eccb12.png">


#### Parameters:

|Parameter| Data Type | Default Value | Description |
|--|--|--|--|
| `placeholder` | `String` | `null` | _Pass a string to display as a placeholder_ |
| labelText | `String` | `null` | _Pass a string to display as a label_ |
| labelColor | `String` | `'orangered'` | _Pass a string to set the label's color_ |
| passwordInput | `Boolean` | `false` | _Pass a boolean to determine whether you want the input's text obscured_ |
| leftIcon | `Component` | `null` | _Pass an [Icon](#icon) or Button component to display on the left side of the input_ |
| rightIcon | `Component` | `null` | _Pass an [Icon](#icon) or Button component to display on the right side of the input_ |
| `vanishingPlaceholder` | `Boolean` | `true` | _Pass a boolean to determine whether you want the placeholder text to fade on focus_ |
| `width` | `String` | `'100%'` | _Pass a string to constrict the component's width_ |
| `height` | `String` | `'50px'` | _Pass a string to constrict the component's height_ |
| `fontsize` | `String` | `'16px'` | _Pass a string to constrict the component's font size_ |
| `showShadow` | `Boolean` | `true` | _Pass a boolean to determine whether you want the component to display a drop shadow_ |
| `border` | `String` | `'orangered'` | _Pass a string to set the component's border color_ |
| `radius` | `String` | `'10px'` | _Pass a string to set the component's border radius_ |
| `changeMethod` | `Function` | `null` | _Pass a method that will receive the `event` object as a parameter_ |
---

### Icon

**OriginalUI** utilizes [Font Awesome](fontawesome.com) to build it's icons. To take advantage of this component you must first follow the instructions at [fontawesome.com](fontawesome.com) and implement the `<script>` tag within the enclosing `<head>` tags of your `index.html` file.

#### Usage:

```javascript
import { Icon } from  'original-ui'

<Icon  name='skull' />
```

#### Result:

<img width="101" alt="Screen Shot 2019-10-17 at 4 32 57 PM" src="https://user-images.githubusercontent.com/44077214/67052587-db681600-f0fb-11e9-916d-d6e7510c04ef.png">

#### Parameters:

|Parameter| Data Type | Default Value | Description |
|--|--|--|--|
| `name` | `String` | `null` | Pass a string with the name of a Font Awesome icon to build the icon |
| `style` | `String` | `'Solid'` | _Pass a string of 'Solid', 'Regular', 'Light', 'Duotone', or 'Brands' to determine the icon style. Only 'Solid' & 'Brands' are included by Font Awesome for free_ |
| `size` | `String` | `'24px'` | _Pass a string to constrict the icon's size_ |
| `color` | `String` | `'orangered'` | _Pass a string to set the icon's color_ |
| `rotate` | `String` | `null` | _Pass a string of '90', '180', or '270' to rotate the icon to that degree_ |
| `verticalFlip` | `Boolean` | `false` | _Pass a boolean to determine whether the icon is flipped vertically_ |
| `horizontalFlip` | `Boolean` | `false` | _Pass a boolean to determine whether the icon is flipped horizontally_ |
| `spin` | `Boolean` | `false` | _Pass a boolean to determine whether the icon spins continuously_ |
| `pulse` | `Boolean` | `false` | _Pass a boolean to determine whether the icon pulses continuously_ |
---

## License

MIT © [JakeAdmire](https://github.com/JakeAdmire)
