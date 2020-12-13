import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import xTheme from '../utils/xTheme'
import Box from './box'
import Label from './label'
import { NextIcon1 } from './icons'

const styles = StyleSheet.create({

})

type TSettingsItemProps = {
  title: string,
  detail?: string,
  link?: string
  bigSize?: boolean
}

const SettingsItem: FC<TSettingsItemProps> = ({ title, detail, bigSize = false, link, children }) => {
  return (
    <TouchableOpacity>
      <Box style={{ height: bigSize ? 70 : 48, flexDirection: 'row', alignItems: 'center' }}>
        <Box style={{ marginLeft: 10, marginRight: 5, height: bigSize ? 64 : 30, width: bigSize ? 64 : 30 }}>
          {children}
        </Box>
        <Box style={{ marginLeft: 10, flex: 1 }}>
          {!detail || detail == ''
            ? <Label style={{ fontSize: 17, height: bigSize ? 64 : 30 }}>{title}</Label>
            : <Box>
              <Label style={{ fontSize: 17 }}>{title}</Label>
              <Label style={{ fontSize: 15, color: xTheme.colors.detail }}>{detail}</Label>
            </Box>
          }
        </Box>
        <Box style={{ width: 25, height: 25, marginRight: 15 }}>
          <NextIcon1 color={xTheme.colors.detail} />
        </Box>
      </Box>
    </TouchableOpacity>
  )
}



export default SettingsItem