import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export class TextInput extends Component {
  static propTypes = {
    placeholderText: PropTypes.string,
    labelText: PropTypes.string,
    labelStyle: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    textStyle: PropTypes.string,
    onChange: PropTypes.func,
    isPassInput: PropTypes.bool,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    value: PropTypes.string
  };

  constructor(props) {
    super(props)
    this.state = { isShadowShown: false }
  }

  updateShadow = () => {
    this.setState({ isShadowShown: !this.state.isShadowShown })
  }

  render() {
    const {
      placeholderText = '',
      labelText,
      labelStyle = { color: 'orange' },
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
    } = this.props

    let divInlineStyles = {
      width: width,
      height: height
    }

    let wrapperClass = `
      ${styles.inputwrapper}
      ${this.state.isShadowShown && styles.inputshadow}
    `

    return (
      <div>
        {
          labelText && labelText.length &&
            <label
              htmlFor={styles.textinput}
              className={styles.inputlabel}
              style={labelStyle}>
              {labelText}
            </label>
        }
        <div
          className={wrapperClass}
          style={divInlineStyles}>
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
            onChange={(e) => onChange !== null ? (e) => onChange(e) : null}
            onFocus={this.updateShadow}
            onBlur={this.updateShadow}/>
          {
            rightIcon && rightIcon.props && rightIcon
          }
        </div>
      </div>
    )
  }
}
