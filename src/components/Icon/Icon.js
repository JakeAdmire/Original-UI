/* eslint-disable no-unused-expressions */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import * as errorHandler from '../../helpers/helpers'

export function Icon({
  iconName = null,
  iconType = 'Solid',
  iconSize = '24px',
  iconColor = '#00000033',
  rotation = null,
  isFlippedVertically = false,
  isFlippedHorizontally = false,
  isSpinning = false,
  isPulsing = false,
  onPress,
  backgroundColor
}) {
  iconName === null && errorHandler.isRequired('Name', 'Icon')

  isFlippedVertically && isFlippedHorizontally && errorHandler.tooManyParameters('Icon', ['isFlippedVertically', 'isFlippedHorizontally'])

  isSpinning && isPulsing && errorHandler.tooManyParameters('Icon', ['isSpinning', 'isPulsing'])

  const wrapperStyle = () => {
    return {
      backgroundColor,
      height: Math.floor(Number(iconSize.match(/[0-9]+/g)[0]) * 1.7),
      width: Math.floor(Number(iconSize.match(/[0-9]+/g)[0]) * 1.7)
    }
  }

  const iconStyle = () => {
    return {
      fontSize: iconSize,
      color: iconColor
    }
  }

  const wrapperClass = () => {
    let wrapperClass = ''

    wrapperClass += ' ' + styles.iconwrapper
    wrapperClass += onPress ? ' ' + styles.iconbutton : ''

    return wrapperClass
  }

  const iconClass = () => {
    let iconClass = ''

    iconClass += ' ' + styles.icon
    iconClass += ' ' + 'fa' + iconType.toLowerCase().split('')[0]
    iconClass += ' ' + 'fa-' + iconName
    iconClass += rotatePosition()
    iconClass += flipPosition()
    iconClass += spinStatus()
    iconClass += onPress ? ' ' + styles.iconbutton : ''

    return iconClass
  }

  const rotatePosition = () => {
    return rotation === '90' || rotation === '180' || rotation === '270'
      ? ' ' + 'fa-rotate-' + rotation
      : ''
  }

  const flipPosition = () => {
    let iconFlip = ''
    if (isFlippedVertically) iconFlip = ' ' + 'fa-flip-vertical'
    if (isFlippedHorizontally) iconFlip = ' ' + 'fa-flip-horizontal'
    return iconFlip
  }

  const spinStatus = () => {
    let iconSpin = ''
    if (isSpinning) iconSpin = ' ' + 'fa-spin'
    if (isPulsing) iconSpin = ' ' + 'fa-pulse'
    return iconSpin
  }

  return (
    <div
      className={wrapperClass()}
      style={wrapperStyle()}
      onMouseUp={onPress}>
      <i
        className={iconClass()}
        style={iconStyle()} />
    </div>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconSize: PropTypes.string,
  iconColor: PropTypes.string,
  rotation: PropTypes.string,
  isFlippedVertically: PropTypes.bool,
  isFlippedHorizontally: PropTypes.bool,
  isSpinning: PropTypes.bool,
  isPulsing: PropTypes.bool,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string
}
