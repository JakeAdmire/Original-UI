# TextInput

Need to make a text input of some kind? An easily style-able search bar, or some login fields? **TextInput** is your component! Simply import `TextInput` and use the [parameters](#parameters) to start customizing, or you can copy and paste directly from one of my examples below!

## Example Usage:

### Simple Search Bar:
```javascript
<TextInput
	placeholderText='Start typing to search...'
	onChange={this.handleSearchChange}
	leftIcon={<Icon iconName={'search'}/>}/>
```
**Result:**

<img width="838" alt="Screen Shot 2019-10-21 at 2 49 58 PM" src="https://user-images.githubusercontent.com/44077214/67242483-dc0dee80-f412-11e9-9d99-982c055e2a28.png">

---


### Password input with hidden value toggle:
```javascript
import { TextInput } from  'original-ui'

<TextInput 
  placeholderText='ex. "thoughtfulpassword123..."'
  labelText='Enter your password:' 
  isPassInput={this.state.isTextHidden}
  rightIcon={
    <Icon 
      iconName={this.state.isTextHidden ? 'eye' : 'eye-slash'}
      iconSize='24px'
      onPress={this.toggleHiddenText}/>
  }/>
```

**Result:**

<img width="838" alt="Screen Shot 2019-10-20 at 9 14 45 PM" src="https://user-images.githubusercontent.com/44077214/67174278-b931fa80-f37e-11e9-8e9c-fe374a3642cb.png">


## Parameters:

|Parameter| Data Type | Default Value | Description |
|--|--|--|--|
| `placeholderText` | `String` | `null` | _Pass a string to display as a placeholder_ |
| labelText | `String` | `null` | _Pass a string to display as a label_ |
| labelStyle | `Object` | `{ color: 'orange' }` | _Pass a style object to set the label's style rules_ |
| isPassInput | `Boolean` | `false` | _Pass a boolean to determine whether you want the input's text obscured_ |
| leftIcon | `Component` | `null` | _Pass an [Icon](#icon) component to display on the left side of the input_ |
| rightIcon | `Component` | `null` | _Pass an [Icon](#icon) component to display on the right side of the input_ |
| `width` | `String` | `'100%'` | _Pass a string to constrict the component's width_ |
| `height` | `String` | `'50px'` | _Pass a string to constrict the component's height_ |
| `textStyle` | `Object` | `{ fontSize: '16px', color: 'grey' }` | _Pass a style object to set the input text's style rules_ |
| `onChange` | `Function` | `null` | _Pass a method that will receive the `event` object as a parameter_ |
| `value` | 'String' | `null` | _Pass a string to set the input's value_ |
---