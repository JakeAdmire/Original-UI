/* eslint-disable padded-blocks */
import React from 'react'
import { shallow } from 'enzyme'

import { Icon } from '../components/Icon/Icon'

describe('Icon', () => {
  let wrapper
  let defaultIconType = 'Solid'
  let defaultIconSize = '24px'
  let defaultIconColor = '#00000033'

  beforeEach(() => {
    wrapper = shallow(
      <Icon iconName='skull' />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('[Parameter] iconName', () => {

    afterEach(() => {
      wrapper.setProps({ iconName: 'skull' })
    })

    it('should give Icon a className reflecting parameter', () => {
      let iconName1 = 'skull'
      expect(wrapper.find('i').hasClass('fa-' + iconName1)).toEqual(true)

      let iconName2 = 'eye'
      wrapper.setProps({ iconName: 'eye' })
      expect(wrapper.find('i').hasClass('fa-' + iconName1)).toEqual(false)
      expect(wrapper.find('i').hasClass('fa-' + iconName2)).toEqual(true)
    })

    it('should throw an error if parameter is not provided', () => {
      let errorMessage = `'Name' parameter is required for 'Icon' component`

      expect(() => {
        shallow(<Icon />)
      }).toThrow(errorMessage)
    })

  })

  describe('[Parameter] iconType', () => {

    it('should give Icon className a default value', () => {
      expect(wrapper.find('i').hasClass('fas')).toEqual(true)
    })

  })

  describe('[Parameter] iconSize', () => {

    afterEach(() => {
      wrapper.setProps({ iconSize: undefined })
    })

    it('should give Icon style a default value', () => {
      let icon = wrapper.find('i')
      let iconFontSize = icon.props().style.fontSize

      expect(iconFontSize).toEqual(defaultIconSize)
    })

    it('should give Icon style reflecting parameter', () => {
      expect(wrapper.find('i').props().style.fontSize).toEqual(defaultIconSize)

      let iconSize = '12px'
      wrapper.setProps({ iconSize: iconSize })

      expect(wrapper.find('i').props().style.fontSize).toEqual(iconSize)
    })

  })

  describe('[Parameter] iconColor', () => {

    afterEach(() => {
      wrapper.setProps({ iconColor: undefined })
    })

    it('should give Icon style a default value', () => {
      expect(wrapper.find('i').props().style.color).toEqual(defaultIconColor)
    })

    it('should give Icon style reflecting parameter', () => {
      expect(wrapper.find('i').props().style.color).toEqual(defaultIconColor)

      let iconColor = 'orange'
      wrapper.setProps({ iconColor: iconColor })

      expect(wrapper.find('i').props().style.color).toEqual(iconColor)
    })

  })

  describe('[Parameter] rotation', () => {

    it('should not give Icon class a default value', () => {
      expect(wrapper.find('i').hasClass('fa-rotate-90')).toEqual(false)
      expect(wrapper.find('i').hasClass('fa-rotate-180')).toEqual(false)
      expect(wrapper.find('i').hasClass('fa-rotate-270')).toEqual(false)
    })

    it('[90] should give Icon class reflecting parameter', () => {
      expect(wrapper.find('i').hasClass('fa-rotate-90')).toEqual(false)

      wrapper.setProps({ rotation: '90' })

      expect(wrapper.find('i').hasClass('fa-rotate-90')).toEqual(true)
    })

    it('[180] should give Icon class reflecting parameter', () => {
      expect(wrapper.find('i').hasClass('fa-rotate-180')).toEqual(false)

      wrapper.setProps({ rotation: '180' })

      expect(wrapper.find('i').hasClass('fa-rotate-180')).toEqual(true)
    })

    it('[270] should give Icon class reflecting parameter', () => {
      expect(wrapper.find('i').hasClass('fa-rotate-270')).toEqual(false)

      wrapper.setProps({ rotation: '270' })

      expect(wrapper.find('i').hasClass('fa-rotate-270')).toEqual(true)
    })

  })

  describe('[Parameter] fa-flip-vertical & [Parameter] fa-flip-horizontal', () => {

    afterEach(() => {
      wrapper.setProps({
        isFlippedHorizontally: false,
        isFlippedVertically: false
      })
    })

    it('should not give Icon class a default value', () => {
      expect(wrapper.find('i').hasClass('fa-flip-vertical')).toEqual(false)
      expect(wrapper.find('i').hasClass('fa-flip-horizontal')).toEqual(false)
    })

    it('[isFlippedVertically] should give Icon class reflecting parameter', () => {
      expect(wrapper.find('i').hasClass('fa-flip-vertical')).toEqual(false)

      wrapper.setProps({ isFlippedVertically: true })

      expect(wrapper.find('i').hasClass('fa-flip-vertical')).toEqual(true)
    })

    it('[isFlippedHorizontally] should give Icon class reflecting parameter', () => {
      expect(wrapper.find('i').hasClass('fa-flip-horizontal')).toEqual(false)

      wrapper.setProps({ isFlippedHorizontally: true })

      expect(wrapper.find('i').hasClass('fa-flip-horizontal')).toEqual(true)
    })

    it('should throw an error when both parameters: true', () => {
      let errorMessage = `'Icon' cannot take more than one of the following parameters: isFlippedVertically,isFlippedHorizontally`

      expect(() => {
        shallow(
          <Icon
            iconName='skull'
            isFlippedHorizontally={true}
            isFlippedVertically={true} />)
      }).toThrow(errorMessage)
    })

  })

  describe('[Parameter] isSpinning & [Parameter] isPulsing', () => {

    afterEach(() => {
      wrapper.setProps({
        isSpinning: false,
        isPulsing: false
      })
    })

    it('should give Icon class no default values', () => {
      expect(wrapper.find('i').hasClass('fa-spin')).toEqual(false)
      expect(wrapper.find('i').hasClass('fa-pulse')).toEqual(false)
    })

    it('[isSpinning] should give Icon class reflecting parameter', () => {
      expect(wrapper.find('i').hasClass('fa-spin')).toEqual(false)
      wrapper.setProps({ isSpinning: true })
      expect(wrapper.find('i').hasClass('fa-spin')).toEqual(true)
    })

    it('[isPulsing] should give Icon class reflecting parameter', () => {
      expect(wrapper.find('i').hasClass('fa-pulse')).toEqual(false)
      wrapper.setProps({ isPulsing: true })
      expect(wrapper.find('i').hasClass('fa-pulse')).toEqual(true)
    })

    it('should throw an error when both parameters: true', () => {
      let component = 'Icon'
      let parameters = ['isSpinning', 'isPulsing']
      let errorMessage = `'${component}' cannot take more than one of the following parameters: ${parameters}`

      expect(() => {
        wrapper.setProps({
          isSpinning: true,
          isPulsing: true
        })
      }).toThrow(errorMessage)
    })

  })

  describe('[Parameter] backgroundColor', () => {

    it('should give Icon wrapper no default value', () => {
      expect(wrapper.props().style.backgroundColor).toEqual(undefined)
    })

    it('should give Icon wrapper style reflecting parameter', () => {
      expect(wrapper.props().style.backgroundColor).toEqual(undefined)

      let backgroundColor = 'orange'
      wrapper.setProps({ backgroundColor: backgroundColor })

      expect(wrapper.props().style.backgroundColor).toEqual(backgroundColor)
    })

  })

})
