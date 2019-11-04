/* eslint-disable padded-blocks */
import React from 'react'
import { shallow } from 'enzyme'

import { FormLabel } from '../components/FormLabel/FormLabel'

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

  describe.skip('[Parameter] context', () => {

    // wrapper.setProps({ context: <TextInput /> })

    it('should not have a default value', () => {

    })

    it('should give FormLabel child element reflecting parameter', () => {

    })

  })

  describe.skip('[Parameter] labelPlacement', () => {

    it('should have a default value', () => {

    })

    it('should give FormLabel style reflecting parameter', () => {

    })

  })

  describe.skip('[Parameter] labelStyle', () => {

    it('should have a default value', () => {

    })

    it('should give FormLabel style reflecting parameter', () => {

    })

  })

  describe.skip('[Parameter] labelText', () => {

    it('should not have a default value', () => {

    })

    it('should give FormLabel innerText reflecting parameter', () => {

    })

  })

})
