import React, {FC, useContext} from 'react';
import {StyleSheet} from 'react-native';

import {ILatestMatches} from '../types/apiTypes';
import Box from './box';
import {LoseIcon, WinIcon} from './icons';
import Label from './label';

import consts from '../utils/Consts';
import {Theme, ThemeContext} from '../utils/Themes';

type TPVPListItemProp = {
  item: ILatestMatches;
};

const PVPMatchListItem: FC<TPVPListItemProp> = ({item}) => {
  const {currentTheme} = useContext(ThemeContext);
  const styles = customStyles(currentTheme);

  return (
    <Box style={styles.background}>
      <Box style={styles.status}>
        {+item.ownerScore >= +item.playerScore ? <WinIcon /> : <LoseIcon />}
      </Box>
      <Box style={styles.scoreBox}>
        <Label textType="bold" style={{...styles.scoreLabel, textAlign: 'right'}}>
          {item.ownerScore}
        </Label>
        <Label style={styles.scoreDash}> - </Label>
        <Label textType="bold" style={{...styles.scoreLabel, textAlign: 'left'}}>
          {item.playerScore}
        </Label>
      </Box>
      <Box style={styles.status}>
        {+item.ownerScore < +item.playerScore ? <WinIcon /> : <LoseIcon />}
      </Box>
    </Box>
  );
};

export default PVPMatchListItem;

const customStyles = (t: Theme) =>
  StyleSheet.create({
    status: {
      width: 22,
      height: 22,
      margin: 4,
    },
    scoreBox: {
      flexDirection: 'row',
      flex: 1,
      marginVertical: 4,
    },
    scoreLabel: {
      color: t.score,
      flex: 1,
      fontSize: consts.fontSizes.pvpMatchesScore,
    },
    scoreDash: {
      color: t.score,
      fontSize: consts.fontSizes.pvpMatchesScore,
    },
    playerName: {
      flex: 1,
      marginLeft: 5,
      marginTop: 5,
      color: t.text,
      fontSize: consts.fontSizes.scoreListPlayerName,
    },
    round: {
      color: t.detail,
      fontSize: consts.fontSizes.scoreListPlayerName,
      marginTop: 5,
    },
    background: {
      backgroundColor: t.listBG,
      flexDirection: 'row',
    },
  });
