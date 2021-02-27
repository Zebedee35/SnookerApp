import React, {FC, useContext} from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {IPlayer} from '../types/apiTypes';
import Box from './box';
import Label from './label';
import PlayerPhoto from './player-photo';

import consts from '../utils/Consts';
import {Theme, ThemeContext} from '../utils/Themes';

type TRankListItemProp = {
  item: IPlayer;
  onPlayerSelected: (item: IPlayer) => void;
};

const getLocalScore = (sScore: string) => {
  const iScore: number = +sScore;
  return `£ ${iScore.toLocaleString()}`;
};

const RankListItem: FC<TRankListItemProp> = ({item, onPlayerSelected}) => {
  const {currentTheme} = useContext(ThemeContext);
  const styles = customStyles(currentTheme);

  return (
    <Box style={{flex: 1, flexDirection: 'row'}}>
      <Pressable
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => {
          onPlayerSelected(item);
        }}>
        <PlayerPhoto style={{width: 80, height: 80}} imgUri={item.photoURL} />
        <Box style={{flex: 1, justifyContent: 'center', paddingLeft: 10}}>
          <Label style={styles.name} textType="bold">
            {item.name}
          </Label>
          <Label style={styles.score}>{getLocalScore(item.score!)}</Label>
        </Box>
        <Box>
          <Label style={styles.rank}>{item.rank}</Label>
        </Box>
      </Pressable>
    </Box>
  );
};

export default RankListItem;

const customStyles = (t: Theme) =>
  StyleSheet.create({
    name: {
      color: t.text,
      fontSize: consts.fontSizes.rankName,
      marginTop: 0,
    },
    score: {
      color: t.detail,
      fontSize: consts.fontSizes.rankScore,
      marginTop: 5,
    },
    rank: {
      fontSize: consts.fontSizes.rankRank,
      textAlign: 'center',
      color: t.detail,
      marginRight: 10,
    },
  });
