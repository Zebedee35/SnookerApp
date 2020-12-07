import React, { FC } from 'react'
import { StyleSheet, TextStyle, Text } from 'react-native'

const styles = StyleSheet.create({
  regular: {

  },
  bold: {

  },
  light:
  {

  },
  medium: {

  },
  header: {
    color: '#FFFFFF',
    fontSize: 26,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  }
})

type TLabelProps = {
  style?: TextStyle
  textType?: 'regular' | 'bold' | 'light' | 'medium'
}

const Label: FC<TLabelProps> = ({ children, style, textType, ...props }) => {
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


const LabelHeader: FC<TLabelProps> = ({ children, style, textType, ...props }) => {
  let textStyle = {}
  textStyle = styles.header
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style

  return (
    <Text style={[textStyle, { ...passedStyles }]} {...props} >
      {children}
    </Text>
  )

}


export default Label;

export { LabelHeader }