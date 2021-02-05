import React, { FC, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import Box from './box'
import Label from './label'

import consts from '../utils/Consts'
import { Theme, themes } from '../utils/Themes'


type TSimpleListHeaderProp = {
  text: string,
  leftText?: string
  rightText?: string
}

const SimpleListHeader: FC<TSimpleListHeaderProp> = ({ text, leftText, rightText }) => {
  const styles = customStyles(themes['dark']);

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

const customStyles = (t: Theme) => StyleSheet.create({
  container: {
    backgroundColor: t.listHeaderBG,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    color: t.text,
    flex: 1,
    textAlign: 'center',
    fontSize: consts.fontSizes.headerLabel,
    marginVertical: 2,
  },
  sideText: {
    color: t.detail,
    width: 60,
    textAlign: 'center',
    fontSize: consts.fontSizes.headerLabel,
  }
})

export default SimpleListHeader