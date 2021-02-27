import React, {FC, useContext} from 'react';
import {StyleSheet} from 'react-native';

import Box from './box';
import Label from './label';
import Utils from '../utils/Utils';
import {Theme, ThemeContext} from '../utils/Themes';
import consts from '../utils/Consts';

type TScoreListHeaderProp = {
  name: string;
  round: string;
  distance: string;
  numLeft: string;
  looserMoney: string;
  winnerMoney: string;
  currency: string;
};

const ScoreListHeader: FC<TScoreListHeaderProp> = ({
  name,
  round,
  distance,
  numLeft,
  looserMoney,
  winnerMoney,
  currency,
}) => {
  const {currentTheme} = useContext(ThemeContext);
  const styles = customStyles(currentTheme);

  return (
    <Box style={styles.background}>
      <Label style={styles.name} textType="bold">
        {name}
      </Label>
      <Label style={styles.detail}>
        (
        {round == '15'
          ? (+distance > 0 ? `Best of ${+distance * 2 - 1}; ` : 'D') +
            `Winner: ${Utils.instance.getCurrencySymbol(
              currency,
            )} ${winnerMoney}; Runner-up: ${Utils.instance.getCurrencySymbol(
              currency,
            )} ${looserMoney}`
          : (+numLeft > 9 ? `Last ${+numLeft}; ` : '') +
            (+distance > 0 ? `Best of ${+distance * 2 - 1}` : ``) +
            (looserMoney !== ''
              ? `; Losers receive ${Utils.instance.getCurrencySymbol(currency)} ${looserMoney}`
              : `A`)}
        )
      </Label>
    </Box>
  );
};
const customStyles = (t: Theme) =>
  StyleSheet.create({
    background: {
      backgroundColor: t.listHeaderBG,
    },
    name: {
      width: '100%',
      height: 30,
      textAlign: 'center',
      fontSize: consts.fontSizes.roundHeaderTitle,
      color: t.text,
      marginTop: 2,
    },
    detail: {
      width: '100%',
      height: 20,
      textAlign: 'center',
      fontSize: consts.fontSizes.roundHeaderDetail,
      color: t.detail,
      marginTop: -3,
    },
  });

export default ScoreListHeader;
