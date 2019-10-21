import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { isRequired, tooManyParameters } from '../../helpers/helpers'

export class Icon extends Component {
  static propTypes = {
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
  };

  render() {
    const {
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
    } = this.props

    iconName === null && isRequired('Name', 'Icon')
    if (isFlippedVertically && isFlippedHorizontally) tooManyParameters('Icon', ['isFlippedVertically', 'isFlippedHorizontally'])
    if (isSpinning && isPulsing) tooManyParameters('Icon', ['isSpinning', 'isPulsing'])

    let iconRotate = rotation !== null && (rotation === '90' || '180' || '270')
      ? `fa-rotate-${rotation}`
      : null

    let iconFlip
    if (isFlippedVertically) iconFlip = 'fa-flip-vertical'
    if (isFlippedHorizontally) iconFlip = 'fa-flip-horizontal'

    let iconSpin
    if (isSpinning) iconSpin = 'fa-spin'
    if (isPulsing) iconSpin = 'fa-pulse'

    let iconClass = `
      ${styles.icon} 
      fa${iconType.toLowerCase().split('')[0]} 
      fa-${iconName} 
      ${iconRotate} 
      ${iconFlip} 
      ${iconSpin} 
      ${onPress && styles.iconbutton}
    `

    let iconInlineStyles = {
      fontSize: iconSize,
      color: iconColor
    }

    let wrapperClass = `
      ${styles.iconwrapper} 
      ${onPress && styles.iconbutton}
    `

    let wrapperInlineStyles = {
      backgroundColor,
      height: Math.floor(Number(iconSize.match(/[0-9]+/g)[0]) * 1.7),
      width: Math.floor(Number(iconSize.match(/[0-9]+/g)[0]) * 1.7)
    }

    return (
      <div
        className={wrapperClass}
        style={wrapperInlineStyles}
        onMouseUp={onPress}>
        <i
          className={iconClass}
          style={iconInlineStyles} />
      </div>
    )
  }
}
