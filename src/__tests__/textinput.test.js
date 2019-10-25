/* eslint-disable padded-blocks */
import React from 'react'
import { shallow } from 'enzyme'

import { TextInput } from '../components/TextInput/TextInput'

describe('TextInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <TextInput />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('[Parameter] placeholderText', () => {

    afterEach(() => {
      wrapper.setProps({ plaeholderText: '' })
    })

    it('should have a default value', () => {
      
    })

    it('should give TextInput placeholder reflecting parameter', () => {

    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe.skip('[Parameter] labelText', () => {

    afterEach(() => {
      wrapper.setProps({ labelText: undefined })
    })

    it('should not have a default value', () => {

    })

    it('should give TextInput a label reflecting parameter', () => {

    })

    it.skip('should throw an error if parameter is not  type:String', () => {

    })

  })

  describe.skip('[Parameter] labelStyle', () => {

    afterEach(() => {
      wrapper.setProps({ labelStyle: { color: 'orange' } })
    })

    it('should have a default value', () => {

    })

    it('should give TextInput label style reflecting parameter', () => {

    })

    it.skip('should throw an error if parameter is not type:String')

  })

  describe.skip('[Parameter] width', () => {

    afterEach(() => {
      wrapper.setProps({ width: '100%' })
    })

    it('should have a default value', () => {

    })

    it('should give TextInput style reflecting parameter', () => {

    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe.skip('[Parameter] height', () => {

    afterEach(() => {
      wrapper.setProps({ height: '50px' })
    })

    it('should have a default value', () => {

    })

    it('should give TextInput style reflecting parameter', () => {

    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe.skip('[Parameter] textStyle', () => {

    afterEach(() => {
      wrapper.setProps({ textStyle: {
        fontSize: '16px',
        color: 'grey'
      } })
    })

    it('should have a default value', () => {

    })

    it('should give TextInput style reflecting parameter', () => {

    })

    it.skip('should throw an error if parameter is not type:Object')

  })

  describe.skip('[Parameter] onChange', () => {

    afterEach(() => {
      wrapper.setProps({ onChange: null })
    })

    it('should not have a default value', () => {

    })

    it('should be called on TextInput change', () => {

    })

    it.skip('should throw an error if parameter is not type:Function', () => {

    })

  })

  describe.skip('[Parameter] isPassInput', () => {

    afterEach(() => {
      wrapper.setProps({ isPassInput: false })
    })

    it('should have a default value', () => {

    })

    it('should give TextInput input type reflecting parameter', () => {

    })

    it.skip('should throw an error if parameter is not type:Boolean', () => P{

    })

  })

  describe.skip('[Parameter] leftIcon', () => {

    afterEach(() => {
      wrapper.setProps({ leftIcon: undefined })
    })

    it('should not have a default value', () => {

    })

    it('should give TextInput element reflecting parameter', () => {

    })

    it.skip('should throw an erorr if parameter is not type:??Element??', () => {

    })

  })

  describe.skip('[Parameter] rightIcon', () => {

    afterEach(() => {
      wrapper.setProps({ rightIcon: undefined })
    })

    it('should not have a default value', () => {

    })

    it('should give TextInput element reflecting parameter', () => {

    })

    it('should throw an error if parameter is not type:??Element??', () => {

    })

  })

  describe.skip('[Parameter] value', () => {

    afterEach(() => {
      wrapper.setProps({ value: undefined })
    })

    it('should not have a default value', () => {

    })

    it('should give TextInput input value reflecting parameter', () => {

    })

    it('should throw an error if parameter is not type:String', () => {

    })

  })

})
