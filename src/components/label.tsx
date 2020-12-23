import React, { FC } from 'react'
import { StyleSheet, TextStyle, Text } from 'react-native'
import xTheme from '../utils/xTheme'
import Box from './box'

const styles = StyleSheet.create({
  regular: {
    fontFamily: "Geogrotesque-Regular"
  },
  bold: {
    fontFamily: "Geogrotesque-SemiBold"
  },
  light: {
    fontFamily: "Geogrotesque-Light"
  },
  medium: {
    fontFamily: "Geogrotesque-Medium"
  },
  header: {
    color: '#FFFFFF',
    fontFamily: "Geogrotesque-Regular",
    fontSize: 26,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  },

  groupHeaderBox: {
    height: 65,
    backgroundColor: xTheme.colors.listHeaderBG
  },
  groupHeaderLabel: {
    fontFamily: "Geogrotesque-Medium",
    marginLeft: 10,
    marginTop: 35,
    fontSize: 18,
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
    default:
      textStyle = styles.regular
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

const SettingHeader: FC<TLabelProps> = ({ children }) => {
  return (
    <Box style={styles.groupHeaderBox}>
      <Label style={styles.groupHeaderLabel}>{children}</Label>
    </Box>
  )
}

export default Label;

export { LabelHeader, SettingHeader }