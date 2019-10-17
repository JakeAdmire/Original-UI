export const isRequired = (param, component) => {
  throw new Error(`'${param}' parameter is required for '${component}' component`)
}

export const tooManyParameters = (component, params) => {
  throw new Error(`'${component}' cannot take more than one of the following parameters: ${params}`)
}
