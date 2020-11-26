import React, { FC } from 'react'
import { StyleSheet, ViewStyle, View } from 'react-native'

const styles = StyleSheet.create({
  default: {

  }
})

type TBoxProps = {
  style?: ViewStyle
}

const Box: FC<TBoxProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.default, style]} {...props}>
      {children}
    </View>
  )
}

export default Box;