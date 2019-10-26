/* eslint-disable padded-blocks */
import React from 'react'
import { shallow } from 'enzyme'

import { TextInput } from '../components/TextInput/TextInput'
import { Icon } from '../components/Icon/Icon'

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
      let input = wrapper.find('input')
      expect(input.props().placeholder).toEqual('')
    })

    it('should give TextInput placeholder reflecting parameter', () => {
      expect(wrapper.find('input').props().placeholder).toEqual('')

      let placeholderText = 'Start typing to search...'
      wrapper.setProps({ placeholderText: placeholderText })

      expect(wrapper.find('input').props().placeholder).toEqual(placeholderText)
    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe('[Parameter] labelText', () => {

    afterEach(() => {
      wrapper.setProps({ labelText: undefined })
    })

    it('should not have a default value', () => {
      let label = wrapper.props().children[0]
      expect(label).toEqual(undefined)
    })

    it('should give TextInput a label reflecting parameter', () => {
      let labelText = 'Enter your email:'

      wrapper.setProps({ labelText })

      let labelInnerText = wrapper.find('label').props().children
      expect(labelInnerText).toEqual(labelText)
    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe('[Parameter] labelStyle', () => {

    afterEach(() => {
      wrapper.setProps({ labelStyle: `{ color: 'orange' }` })
    })

    it('should have a default value', () => {
      let labelStyle = { color: 'orange' }

      wrapper.setProps({ labelText: 'Enter your email' })

      let label = wrapper.find('label')
      expect(label.props().style).toEqual(labelStyle)

    })

    it('should give TextInput label style reflecting parameter', () => {
      let labelStyle = `{ fontSize: '34px', color: 'blue' }`

      wrapper.setProps({ 
        labelText: 'Email:',
        labelStyle
      })

      let label = wrapper.find('label')
      expect(label.props().style).toEqual(labelStyle)
    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe('[Parameter] width', () => {

    afterEach(() => {
      wrapper.setProps({ width: '100%' })
    })

    it('should have a default value', () => {
      let width = '100%'

      let inputWrapper = wrapper.find('.inputWrapper')
      expect(inputWrapper.props().style.width).toEqual(width)
    })

    it('should give TextInput style reflecting parameter', () => {
      let width = '50px'

      wrapper.setProps({ width })

      let inputWrapper = wrapper.find('.inputWrapper')
      expect(inputWrapper.props().style.width).toEqual(width)
    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe.skip('[Parameter] height', () => {

    afterEach(() => {
      wrapper.setProps({ height: '50px' })
    })

    it('should have a default value', () => {
      let height = '50px'

      let inputWrapper = wrapper.find('.inputWrapper')
      expect(inputWrapper.props().style.height).toEqual(height)
    })

    it('should give TextInput style reflecting parameter', () => {
      let height = '100%'

      wrapper.setProps({ height })

      let inputWrapper = wrapper.find('.inputWrapper')
      expect(inputWrapper.props().style.height).toEqual(height)
    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

  describe('[Parameter] textStyle', () => {

    afterEach(() => {
      wrapper.setProps({ textStyle: `{
        fontSize: '16px',
        color: 'grey'
      }` })
    })

    it('should have a default value', () => {
      let textStyle = {
        fontSize: '16px',
        color: 'grey'
      }
      let input = wrapper.find('input')
      expect(input.props().style).toEqual(textStyle)
    })

    it('should give TextInput style reflecting parameter', () => {
      let textStyle = `{
        fontWeight: 800
      }`

      wrapper.setProps({ textStyle })

      let input = wrapper.find('input')
      expect(input.props().style).toEqual(textStyle)
    })

    it.skip('should throw an error if parameter is not type:Object')

  })

  describe('[Parameter] onChange', () => {

    afterEach(() => {
      wrapper.setProps({ onChange: null })
    })

    it('should not have a default value', () => {
      let input = wrapper.find('input')

      expect(input.props().onChange).toEqual(null)
    })

    it('should be called on TextInput change', () => {
      let onChange = jest.fn()

      wrapper.setProps({ onChange })

      let input = wrapper.find('input')
      input.simulate('change')

      expect(onChange).toBeCalled()
    })

    it.skip('should throw an error if parameter is not type:Function', () => {

    })

  })

  describe('[Parameter] isPassInput', () => {

    afterEach(() => {
      wrapper.setProps({ isPassInput: false })
    })

    it('should have a default value', () => {
      let input = wrapper.find('input')

      expect(input.props().type).toEqual('text')
    })

    it('should give TextInput input type reflecting parameter', () => {
      let isPassInput = true

      wrapper.setProps({ isPassInput })

      let input = wrapper.find('input')
      expect(input.props().type).toEqual('password')
    })

    it.skip('should throw an error if parameter is not type:Boolean', () => {

    })

  })

  describe('[Parameter] leftIcon', () => {

    afterEach(() => {
      wrapper.setProps({ leftIcon: undefined })
    })

    it('should not have a default value', () => {
      let inputWrapper = wrapper.find('.inputWrapper')

      expect(inputWrapper.props().children[0]).toEqual(undefined)
    })

    it('should give TextInput element reflecting parameter', () => {
      let leftIcon = <Icon iconName='search' />

      wrapper.setProps({ leftIcon })

      let inputWrapper = wrapper.find('.inputWrapper')
      expect(inputWrapper.props().children[0]).toEqual(leftIcon)
    })

    it.skip('should throw an erorr if parameter is not type:??Element??', () => {

    })

  })

  describe('[Parameter] rightIcon', () => {

    afterEach(() => {
      wrapper.setProps({ rightIcon: undefined })
    })

    it('should not have a default value', () => {
      let inputWrapper = wrapper.find('.inputWrapper')

      expect(inputWrapper.props().children[2]).toEqual(undefined)
    })

    it('should give TextInput element reflecting parameter', () => {
      let rightIcon = <Icon iconName='search' />

      wrapper.setProps({ rightIcon })

      let inputWrapper = wrapper.find('.inputWrapper')
      expect(inputWrapper.props().children[2]).toEqual(rightIcon)
    })

    it('should throw an error if parameter is not type:??Element??', () => {

    })

  })

  describe('[Parameter] value', () => {

    afterEach(() => {
      wrapper.setProps({ value: undefined })
    })

    it('should not have a default value', () => {
      let input = wrapper.find('input')

      expect(input.props().value).toEqual(undefined)
    })

    it('should give TextInput input value reflecting parameter', () => {
      let value = 'applesauce'

      wrapper.setProps({ value })

      let input = wrapper.find('input')
      expect(input.props().value).toEqual(value)
    })

    it.skip('should throw an error if parameter is not type:String', () => {

    })

  })

})
