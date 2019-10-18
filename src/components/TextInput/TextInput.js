import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export class TextInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    labelText: PropTypes.string,
    labelColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fontsize: PropTypes.string,
    showShadow: PropTypes.bool,
    border: PropTypes.string,
    radius: PropTypes.string,
    vanishingPlaceholder: PropTypes.bool,
    changeMethod: PropTypes.func,
    passwordInput: PropTypes.bool,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object
  };

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      isShadowShown: null
    }
  }

  updateShadow = () => {
    this.setState({
      isShadowShown: !this.state.isShadowShown
    })
  }

  updateValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const {
      placeholder,
      labelText,
      labelColor = 'orangered',
      width = '100%',
      height = '50px',
      fontsize = '16px',
      showShadow = true,
      border = 'orangered',
      radius = '10px',
      vanishingPlaceholder = true,
      changeMethod = null,
      passwordInput = false,
      leftIcon,
      rightIcon
    } = this.props

    let inputInlineStyles = {
      fontSize: fontsize
    }

    let divInlineStyles = {
      width: width,
      height: height,
      border: 'solid',
      borderColor: border,
      borderRadius: radius
    }

    let labelInlineStyles = {
      color: labelColor
    }

    let inputClass = `
      ${styles.textinput} 
      ${vanishingPlaceholder && styles.vanishingPlaceholder}
    `

    let divClass = `
      ${styles.wrapperdiv}
      ${this.state.isShadowShown && styles.inputshadow}
    `

    return (
      <div>
        {
          labelText && labelText.length &&
            <label
              htmlFor={styles.textinput}
              className={styles.inputlabel}
              style={labelInlineStyles}
            >
              {labelText}
            </label>
        }
        <div
          className={divClass}
          style={divInlineStyles}
        >
          {
            leftIcon && leftIcon.props && leftIcon
          }
          <input
            type={passwordInput ? 'password' : 'text'}
            value={this.state.inputValue}
            id={styles.textinput}
            className={inputClass}
            placeholder={placeholder || null}
            style={inputInlineStyles}
            onChange={(e) => this.updateValue(e) && (changeMethod !== null ? (e) => changeMethod(e) : null)}
            onFocus={showShadow ? this.updateShadow : null}
            onBlur={showShadow ? this.updateShadow : null}
          />
          {
            rightIcon && rightIcon.props && rightIcon
          }
        </div>
      </div>
    )
  }
}
