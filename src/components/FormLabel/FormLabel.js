import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export function FormLabel({
  context = null,
  labelPlacement = 'top',
  labelStyle = { color: 'orange' },
  labelText = null
}) {
  const placeLabel = () => {
    if (labelPlacement === 'top') labelStyle['flexDirection'] = 'column'
    if (labelPlacement === 'right') labelStyle['flexDirection'] = 'row-reverse'
    if (labelPlacement === 'bottom') labelStyle['flexDirection'] = 'column-reverse'
    if (labelPlacement === 'left') labelStyle['flexDirection'] = 'row'
    return labelStyle
  }

  return (
    <div>
      <label
        className={styles.formLabel}
        style={placeLabel()}
      >
        {labelText}
        {context}
      </label>
    </div>
  )
}

FormLabel.propTypes = {
  context: PropTypes.element,
  labelPlacement: PropTypes.string,
  labelStyle: PropTypes.object,
  labelText: PropTypes.string
}
