import React, { FC, useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import Box from './box'

import consts from '../utils/Consts'
import { Theme, ThemeContext } from '../utils/Themes'

type TLabelProps = React.ComponentProps<typeof Text> & {
  textType?: 'regular' | 'bold' | 'light' | 'medium'
}

const Label: FC<TLabelProps> = ({ children, textType, ...props }) => {
  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme)
  const { style, ...restOfProps } = props

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
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style
  return (
    <Text style={[textStyle, { ...passedStyles }]} {...restOfProps}>
      {children}
    </Text>
  )
}

const LabelHeader: FC<TLabelProps> = ({ children, textType, ...props }) => {
  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme)
  const { style, ...restOfProps } = props

  let textStyle = {}
  textStyle = styles.header
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style

  return (
    <Text style={[textStyle, { ...passedStyles }]} {...restOfProps} >
      {children}
    </Text>
  )
}

const SettingHeader: FC<TLabelProps> = ({ children }) => {
  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme)

  return (
    <Box style={styles.groupHeaderBox}>
      <Label style={styles.groupHeaderLabel}>{children}</Label>
    </Box>
  )
}

export default Label;

export { LabelHeader, SettingHeader }

const customStyles = (t: Theme) => StyleSheet.create({
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
    fontSize: consts.fontSizes.headerTitle,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  },

  groupHeaderBox: {
    height: 65,
    backgroundColor: t.listHeaderBG
  },
  groupHeaderLabel: {
    fontFamily: "Geogrotesque-Medium",
    marginLeft: 10,
    marginTop: 35,
    fontSize: consts.fontSizes.groupHeader,
    color: t.text
  }

})
