import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { isRequired, tooManyParameters } from '../../helpers/helpers'

export class Icon extends Component {
  static propTypes = {
    name: PropTypes.string,
    style: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    rotate: PropTypes.string,
    verticalFlip: PropTypes.bool,
    horizontalFlip: PropTypes.bool,
    spin: PropTypes.bool,
    pulse: PropTypes.bool
  };

  render() {
    const {
      name = null,
      style = 'Solid',
      size = '24px',
      color = 'orangered',
      rotate = null,
      verticalFlip = false,
      horizontalFlip = false,
      spin = false,
      pulse = false
    } = this.props

    name === null && isRequired('Name', 'Icon')
    if (verticalFlip && horizontalFlip) tooManyParameters('Icon', ['verticalFlip', 'horizontalFlip'])
    if (spin && pulse) tooManyParameters('Icon', ['spin', 'pulse'])

    let iconStyle = `fa${style.toLowerCase().split('')[0]}`

    let iconRotate = rotate !== null && (rotate === '90' || '180' || '270')
      ? `fa-rotate-${rotate}`
      : null

    let iconFlip
    if (verticalFlip) iconFlip = 'fa-flip-vertical'
    if (horizontalFlip) iconFlip = 'fa-flip-horizontal'

    let iconSpin
    if (spin) iconSpin = 'fa-spin'
    if (pulse) iconSpin = 'fa-pulse'

    let inputClass = `${iconStyle} fa-${name} ${iconRotate} ${iconFlip} ${iconSpin}`

    let inlineStyles = {
      fontSize: size,
      color: color
    }

    return (
      <i className={inputClass} style={inlineStyles} />
    )
  }
}
