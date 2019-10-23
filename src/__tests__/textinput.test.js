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
})
