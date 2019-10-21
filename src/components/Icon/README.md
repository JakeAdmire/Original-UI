# Icon

Need a quick and painless icon? Easy! Need the icon to function as a pressable button? Just as easy! No more complex SVG editors or giant blocks of code for you, just import Icon!

**Original-UI** utilizes [Font Awesome](fontawesome.com) to build it's icons. To take advantage of this component you must first follow the instructions at [fontawesome.com](fontawesome.com) and implement the `<script>` tag within the enclosing `<head>` tags of your `index.html` file.


## Example Usage:

  
### Simple Icons with defined colors:
```javascript
import { Icon } from  'original-ui'

<Icon
	iconName='skull'
	iconColor='white'
	backgroundColor='red'/>
<Icon
	iconName='bath'
	iconColor='white'
	backgroundColor='cornflowerblue'  />
<Icon
	iconName='bomb'
	iconColor='white'
	backgroundColor='black'  />
```


**Result:**

<img  width="205"  alt="Screen Shot 2019-10-20 at 5 47 46 PM"  src="https://user-images.githubusercontent.com/44077214/67168473-22574500-f362-11e9-8c02-961901f03072.png">

## Parameters:

|Parameter| Data Type | Default Value | Description |
|--|--|--|--|
| `iconName` | `String` | `null` | Pass a string with the name of a Font Awesome icon to build the icon |
| `iconType` | `String` | `'Solid'` | _Pass a string of 'Solid', 'Regular', 'Light', 'Duotone', or 'Brands' to determine the icon style. Only 'Solid' & 'Brands' are included by Font Awesome for free_ |
| `iconSize` | `String` | `'24px'` | _Pass a string to constrict the icon's size_ |
| `iconColor` | `String` | `'#00000033'` | _Pass a string to set the icon's color_ |
| `rotation` | `String` | `null` | _Pass a string of '90', '180', or '270' to rotate the icon to that degree_ |
| `isFlippedVertically` | `Boolean` | `false` | _Pass a boolean to determine whether the icon is flipped vertically_ |
| `isFlippedHorizontally` | `Boolean` | `false` | _Pass a boolean to determine whether the icon is flipped horizontally_ |
| `isSpinning` | `Boolean` | `false` | _Pass a boolean to determine whether the icon spins continuously_ |
| `isPulsing` | `Boolean` | `false` | _Pass a boolean to determine whether the icon pulses continuously_ |
| `onPress` | `Function` | `null` | _Pass a function to be called on icon press. Icon will not behave as a button if `onPress` is null_ |
| backgroundColor | `String` | `null` | _Pass a string to set the icon's background color_ |