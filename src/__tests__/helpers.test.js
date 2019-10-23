/* eslint-disable padded-blocks */
import { isRequired, tooManyParameters } from '../helpers/helpers'

describe('isRequired', () => {

  it('should throw an error when called', () => {
    let param1 = 'iconName'
    let param2 = 'Icon'
    let errorMessage = `'${param1}' parameter is required for '${param2}' component`

    expect(() => {
      isRequired(param1, param2)
    }).toThrow(errorMessage)
  })

})

describe('tooManyParameters', () => {

  it('should throw an error when called', () => {
    let param1 = 'Icon'
    let param2 = ['isFlippedVertically', 'isFlippedHorizontally']
    let errorMessage = `'${param1}' cannot take more than one of the following parameters: ${param2}`

    expect(() => {
      tooManyParameters(param1, param2)
    }).toThrow(errorMessage)
  })

})
