import React, { FC } from 'react'
import { StyleSheet, TextStyle, Text } from 'react-native'

type TLabelProps = {
  style?: TextStyle
  textType?: 'regular' | 'bold' | 'light' | 'medium'
}

const Box: FC<TLabelProps> = ({ children, style, textType, ...props }) => {
  let textStyle = {}
  switch (textType) {
    case 'regular':
      textStyle = styles.regular
      break
    case 'bold':
      textStyle = styles.bold
      break
    case 'light':
      textStyle = styles.light
      break
    case 'medium':
      textStyle = styles.medium
      break
  }
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style

  return (
    <Text style={[textStyle, { ...passedStyles }]} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  regular: {

  },
  bold: {

  },
  light:
  {

  },
  medium: {

  }
})

export default Box;