import React, {FC, useContext} from 'react';
import {StyleSheet, Switch} from 'react-native';

import Box from './box';
import Label from './label';

import consts from '../utils/Consts';
import {Theme, ThemeContext} from '../utils/Themes';

type TSettingsSwitchItemProps = {
  title: string;
  currValue: boolean;
  onValueChange: (value: boolean) => void;
};

const SettingsSwitchItem: FC<TSettingsSwitchItemProps> = ({title, currValue, onValueChange}) => {
  const {currentTheme} = useContext(ThemeContext);
  const styles = customStyles(currentTheme);

  return (
    <Box style={styles.background}>
      <Box style={{marginLeft: 10, flex: 1}}>
        <Box>
          <Label style={styles.label}>{title}</Label>
        </Box>
      </Box>
      <Switch onValueChange={onValueChange} value={currValue} style={{marginRight: 15}} />
    </Box>
  );
};

export default SettingsSwitchItem;

const customStyles = (t: Theme) =>
  StyleSheet.create({
    background: {
      backgroundColor: t.listBG,
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      fontSize: consts.fontSizes.listItem,
      color: t.text,
    },
    labelDetail: {
      fontSize: consts.fontSizes.listItemDetail,
      color: t.detail,
    },
  });
