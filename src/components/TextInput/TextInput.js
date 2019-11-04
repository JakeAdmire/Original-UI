import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export function TextInput({
  placeholderText = '',
  width = '100%',
  height = '50px',
  textStyle = {
    fontSize: '16px',
    color: 'grey'
  },
  onChange = null,
  isPassInput = false,
  leftIcon,
  rightIcon,
  value
}) {
  const [isShadowShown, updateShadow] = useState(false)

  // ERROR HANDLERS HERE ---

  // ERROR HANDLERS HERE ^^^

  const divInlineStyles = () => {
    return {
      width: width,
      height: height
    }
  }

  const wrapperClass = () => {
    let className = 'inputWrapper'
    className += ' ' + styles.inputwrapper
    if (isShadowShown) className += ' ' + styles.inputshadow
    return className
  }

  return (
    <div
      className={wrapperClass()}
      style={divInlineStyles()}>
      {
        leftIcon && leftIcon.props && leftIcon
      }
      <input
        type={isPassInput ? 'password' : 'text'}
        value={value}
        id={styles.textinput}
        className={styles.textinput}
        placeholder={placeholderText}
        style={textStyle}
        onChange={onChange !== null ? (e) => onChange(e) : null}
        onFocus={() => updateShadow(!isShadowShown)}
        onBlur={() => updateShadow(!isShadowShown)}
      />
      {
        rightIcon && rightIcon.props && rightIcon
      }
    </div>
  )
}

TextInput.propTypes = {
  placeholderText: PropTypes.string,
  // labelText: PropTypes.string,
  // labelStyle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  textStyle: PropTypes.string,
  onChange: PropTypes.func,
  isPassInput: PropTypes.bool,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  value: PropTypes.string
}
