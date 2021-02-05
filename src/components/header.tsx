import React, { FC } from 'react'
import { StyleSheet, ViewStyle, View, ImageBackground, ImageSourcePropType } from 'react-native'
import consts from '../utils/Consts'
import Box from './box'
import Label, { LabelHeader } from './label'

const HEADER_HEIGHT = 180


const styles = StyleSheet.create({
  default: {
    height: HEADER_HEIGHT
  },
  image: {
    height: HEADER_HEIGHT,
    width: '100%'
  },
  darker: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    opacity: 0.3
  },
  container: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: HEADER_HEIGHT
  }
})

type THeaderProps = {
  style?: ViewStyle
}

type THeaderImageProps = {
  style?: ViewStyle,
  imageUri: ImageSourcePropType,
}

type THeaderContainerProps = {
}

type THeaderTopProps = {
  title?: string
  line2?: string
  line3?: string
}

type THeaderBottomProps = {
  leftText?: string
  middleText?: string
  rightText?: string
}

const Header: FC<THeaderProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.default, style]} {...props}>
      {children}
    </View>
  )
}

const HeaderImage: FC<THeaderImageProps> = ({ imageUri }) => {
  return (
    <ImageBackground source={imageUri} style={styles.image} >
      <Box style={styles.darker}>
      </Box>
    </ImageBackground>
  )
}

const HeaderContainer: FC<THeaderContainerProps> = ({ children }) => {
  return (
    <Box style={styles.container}>
      {children}
    </Box>
  )
}

const HeaderTop: FC<THeaderTopProps> = ({ children, title, line2, line3, ...props }) => {
  return (
    <Box style={{ flex: 1, alignItems: 'center' }} {...props}>
      <LabelHeader style={{ marginTop: 35 }}>{title}</LabelHeader>
      <LabelHeader style={{ marginTop: 5, fontSize: consts.fontSizes.listItem }}>{line2}</LabelHeader>
      <LabelHeader style={{ fontSize: consts.fontSizes.listItem }}>{line3}</LabelHeader>
    </Box>
  )
}


const HeaderBottom: FC<THeaderBottomProps> = ({ children, leftText, middleText, rightText, ...props }) => {
  return (
    <Box style={{ flexDirection: 'row', marginBottom: 5 }} {...props}>
      <LabelHeader style={{ fontSize: consts.fontSizes.listItem, marginLeft: 10 }}>{leftText}</LabelHeader>
      {!middleText || middleText === ''
        ? <Box style={{ flex: 1 }}>{children}</Box>
        : <LabelHeader style={{ fontSize: consts.fontSizes.listItem, flex: 1 }}>{middleText}</LabelHeader>
      }
      <LabelHeader style={{ fontSize: consts.fontSizes.listItem, marginRight: 10 }}>{rightText}</LabelHeader>
    </Box>
  )
}

export default Header;
export { HeaderImage, HeaderContainer, HeaderTop, HeaderBottom }