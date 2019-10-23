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
