import React, { FC } from 'react'
import { StyleSheet, Switch } from 'react-native'

import xTheme from '../utils/xTheme'
import Box from './box'
import Label from './label'

const styles = StyleSheet.create({

})

type TSettingsSwitchItemProps = {
  title: string,
  currValue: boolean,
  onValueChange: (value: boolean) => void
}

const SettingsSwitchItem: FC<TSettingsSwitchItemProps> = ({ title, currValue, onValueChange }) => {
  return (
    <Box style={{ height: 48, flexDirection: 'row', alignItems: 'center' }}>
      <Box style={{ marginLeft: 10, flex: 1 }}>
        <Box>
          <Label style={{ fontSize: 17, }}>{title}</Label>
        </Box>
      </Box>
      <Switch
        onValueChange={onValueChange}
        value={currValue}
        style={{ marginRight: 15 }}
      />
    </Box>
  )
}



export default SettingsSwitchItem