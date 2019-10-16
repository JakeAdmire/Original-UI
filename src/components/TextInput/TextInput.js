import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export class TextInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fontsize: PropTypes.string,
    showShadow: PropTypes.bool,
    border: PropTypes.string,
    radius: PropTypes.string,
    vanishingPlaceholder: PropTypes.bool,
    changeMethod: PropTypes.func
  };

  render() {
    const {
      placeholder,
      width = '100%',
      height = '50px',
      fontsize = '16px',
      showShadow = true,
      border = 'orangered',
      radius = '10px',
      vanishingPlaceholder = true,
      changeMethod
    } = this.props

    let inlineStyles = {
      width: width,
      height: height,
      fontSize: fontsize,
      borderColor: border,
      borderRadius: radius
    }

    let inputClass = `
      ${styles.textinput} 
      ${showShadow && styles.inputshadow}
      ${vanishingPlaceholder && styles.vanishingPlaceholder}
    `

    return (
      <input
        className={inputClass}
        placeholder={placeholder || null}
        style={inlineStyles}
        onChange={changeMethod !== null ? (e) => changeMethod(e) : null}
      />
    )
  }
}
