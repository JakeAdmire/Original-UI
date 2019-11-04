/* eslint-disable padded-blocks */
import React from 'react'
import { shallow } from 'enzyme'

import { FormLabel } from '../components/FormLabel/FormLabel'
import { TextInput } from '../components/TextInput/TextInput'

describe('FormLabel', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <FormLabel />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('[Parameter] context', () => {

    it('should not have a default value', () => {
      let context = wrapper.find('label').props().children[1]
      expect(context).toEqual(null)
    })

    it('should give FormLabel child element reflecting parameter', () => {
      expect(wrapper.find('label').props().children[1]).toEqual(null)

      let input = <TextInput />
      wrapper.setProps({ context: input })

      expect(wrapper.find('label').props().children[1]).toEqual(input)
    })

  })

  describe('[Parameter] labelPlacement', () => {

    it('should have a default value', () => {
      let label = wrapper.find('label')
      expect(label.props().style.flexDirection).toEqual('column')
    })

    it('["right"] should give FormLabel style reflecting parameter', () => {
      wrapper.setProps({ labelPlacement: 'right' })

      let label = wrapper.find('label')
      expect(label.props().style.flexDirection).toEqual('row-reverse')
    })

    it('["bottom"] should give FormLabel style reflecting parameter', () => {
      wrapper.setProps({ labelPlacement: 'bottom' })

      let label = wrapper.find('label')
      expect(label.props().style.flexDirection).toEqual('column-reverse')
    })

    it('["left"] should give FormLabel style reflecting parameter', () => {
      wrapper.setProps({ labelPlacement: 'left' })

      let label = wrapper.find('label')
      expect(label.props().style.flexDirection).toEqual('row')
    })

  })

  describe('[Parameter] labelStyle', () => {

    it('should have a default value', () => {
      let label = wrapper.find('label')
      expect(label.props().style.color).toEqual('orange')
    })

    it('should give FormLabel style reflecting parameter', () => {

    })

  })

  describe('[Parameter] labelText', () => {

    it('should not have a default value', () => {

    })

    it('should give FormLabel innerText reflecting parameter', () => {

    })

  })

})
