import React, { FC, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import Box from './box'
import Label from './label'
import xTheme from '../utils/xTheme'


type TSimpleListHeaderProp = {
  text: string
}

const SimpleListHeader: FC<TSimpleListHeaderProp> = ({ text }) => {
  return (
    <Box style={{ backgroundColor: xTheme.colors.listHeaderBG }}>
      <Label style={styles.name} textType='bold'>{text}</Label>
    </Box>
  )
}

const styles = StyleSheet.create({
  name: {
    width: '100%',
    height: 22,
    textAlign: 'center',
    fontSize: xTheme.fontSizes.headerLabel,
    marginTop: 2,
  }
})

export default SimpleListHeader