import React, { FC, useContext } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Box from './box'
import Label from './label'
import { NextIcon1 } from './icons'

import consts from '../utils/Consts'
import { Theme, ThemeContext } from '../utils/Themes'

type TSettingsItemProps = {
  title: string,
  detail?: string,
  bigSize?: boolean,
  onPress?: () => void
}

const SettingsItem: FC<TSettingsItemProps> = ({ title, detail, bigSize = false, onPress, children }) => {
  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme);

  return (
    <TouchableOpacity onPress={onPress} style={styles.background}>
      <Box style={{ height: bigSize ? 70 : 48, flexDirection: 'row', alignItems: 'center' }}>
        <Box style={{ marginLeft: 10, marginRight: 5, height: bigSize ? 64 : 30, width: bigSize ? 64 : 30 }}>
          {children}
        </Box>
        <Box style={{ marginLeft: 10, flex: 1 }}>
          {!detail || detail == ''
            ? <Label style={[styles.label, { height: bigSize ? 64 : 30 }]}>{title}</Label>
            : <Box>
              <Label style={styles.label}>{title}</Label>
              <Label style={styles.labelDetail}>{detail}</Label>
            </Box>
          }
        </Box>
        <Box style={{ width: 25, height: 25, marginRight: 15 }}>
          <NextIcon1 color={currentTheme.tabBar} />
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default SettingsItem

const customStyles = (t: Theme) => StyleSheet.create({
  background: {
    backgroundColor: t.listBG
  },
  label: {
    fontSize: consts.fontSizes.listItem,
    color: t.text,
  },
  labelDetail: {
    fontSize: consts.fontSizes.listItemDetail,
    color: t.detail,
  }
})