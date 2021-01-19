import React, { FC, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import Box from './box'
import Label from './label'
import xTheme from '../utils/xTheme'


type TSimpleListHeaderProp = {
  text: string,
  leftText?: string
  rightText?: string
}

const SimpleListHeader: FC<TSimpleListHeaderProp> = ({ text, leftText, rightText }) => {
  return (
    <Box style={styles.container}>
      {leftText !== '' || rightText !== ''
        ? <Label style={styles.sideText} textType='light'>{leftText}</Label>
        : <></>}
      <Label style={styles.name} textType='medium'>{text}</Label>
      {leftText !== '' || rightText !== ''
        ? <Label style={styles.sideText} textType='light'>{rightText}</Label>
        : <></>}
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: xTheme.colors.listHeaderBG,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    flex: 1,
    textAlign: 'center',
    fontSize: xTheme.fontSizes.headerLabel,
    marginVertical: 2,
  },
  sideText: {
    width: 60,
    textAlign: 'center',
    fontSize: xTheme.fontSizes.headerLabel,
    color: xTheme.colors.detail
  }
})

export default SimpleListHeader