import React, {FC, useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Pressable} from 'react-native';

import {IMatch, IPlayer} from '../types/apiTypes';
import Utils from '../utils/Utils';
import Box from './box';
import Live from './live';
import Label from './label';
import PlayerPhoto from './player-photo';

import consts from '../utils/Consts';
import {Theme, ThemeContext} from '../utils/Themes';

type TScoreListItemProp = {
  // item: IRound
  item: IMatch;
  bigSize?: boolean;
  onPlayerSelected: (item: IPlayer) => void;
  onPVPSelected: (player1: IPlayer, player2: IPlayer) => void;
};

const ScoreListItem: FC<TScoreListItemProp> = ({
  item,
  bigSize = false,
  onPlayerSelected,
  onPVPSelected,
}) => {
  const [matchState, setMatchState] = useState('');
  const {currentTheme} = useContext(ThemeContext);
  const styles = customStyles(currentTheme);

  useEffect(() => {
    const sMatchState = Utils.instance.getMatchState(item);
    setMatchState(sMatchState);
  });

  function checkMatchState(mstate: string) {
    switch (mstate) {
      case 'done':
        return <Label style={bigSize ? styles.msDoneBig : styles.msDone}>done</Label>;
      case 'live':
        return <Live bigSize={bigSize} />;
      case 'break':
        return <Label style={bigSize ? styles.msDoneBig : styles.msDone}>on Break</Label>;
      default:
        return (
          <Box>
            <Label style={bigSize ? styles.msDoneBig : styles.msDone}>{mstate}</Label>
          </Box>
        );
    }
  }

  function scoreSize() {
    return bigSize ? consts.fontSizes.scoreBig : consts.fontSizes.scoreSmall;
  }

  return (
    <Box style={[styles.background, {height: bigSize ? 100 : 50}]}>
      <Box style={{flexDirection: 'row', height: bigSize ? 80 : 50}}>
        {/* player 1 */}
        <Pressable
          style={{flex: 1, flexDirection: 'row'}}
          onPress={() => {
            onPlayerSelected(item.players![0]);
          }}>
          <Box style={{width: bigSize ? 80 : 44, margin: 3}}>
            <PlayerPhoto
              style={{width: bigSize ? 80 : 44, height: bigSize ? 80 : 44}}
              imgUri={item.players![0].photoURL}
            />
            <Box
              style={{
                width: bigSize ? 155 : 44,
                height: bigSize ? 125 : 82,
                zIndex: 1,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Label style={styles.rank}># {item.players![0].rank}</Label>
              {bigSize ? (
                <Image
                  source={require('../assets/flags/mini/gb-wls.png')}
                  style={{width: 28, height: 21}}
                />
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {!bigSize ? (
            <Box style={{flex: 1, margin: 3, justifyContent: 'center', alignItems: 'center'}}>
              <Label style={styles.playerName}>{item.players![0].name}</Label>
            </Box>
          ) : (
            <></>
          )}
        </Pressable>

        {/* Skor Panel */}
        <Pressable
          style={{width: bigSize ? 130 : 85, height: '100%'}}
          onPress={() => {
            onPVPSelected(item.players![0], item.players![1]);
          }}>
          <Box style={{width: '100%', marginTop: 5, flexDirection: 'row'}}>
            <Label
              textType="bold"
              style={[styles.score, {fontSize: scoreSize(), textAlign: 'right'}]}>
              {item.players![0].score}
            </Label>
            <Label
              textType="bold"
              style={[styles.score, {fontSize: scoreSize(), textAlign: 'center'}]}>
              -
            </Label>
            <Label
              textType="bold"
              style={[styles.score, {fontSize: scoreSize(), textAlign: 'left'}]}>
              {item.players![1].score}
            </Label>
          </Box>
          <Box style={{width: '100%', alignItems: 'center'}}>{checkMatchState(matchState)}</Box>
        </Pressable>

        {/* player 2 */}
        <Pressable
          style={{flex: 1, flexDirection: bigSize ? 'row-reverse' : 'row'}}
          onPress={() => {
            onPlayerSelected(item.players![1]);
          }}>
          {/* <Box style={{ flex: 1, flexDirection: bigSize ? 'row-reverse' : 'row' }}> */}
          {!bigSize ? (
            <Box style={{flex: 1, margin: 3, justifyContent: 'center', alignItems: 'center'}}>
              <Label style={[styles.playerName, styles.playerNameRight]}>
                {item.players![1].name}
              </Label>
            </Box>
          ) : (
            <></>
          )}
          <Box style={{width: bigSize ? 80 : 44, margin: 3}}>
            <PlayerPhoto
              style={{width: bigSize ? 80 : 44, height: bigSize ? 80 : 44}}
              imgUri={item.players![1].photoURL}
            />

            <Box
              style={{
                width: bigSize ? 15 : 44,
                height: bigSize ? 140 : 82,
                zIndex: 1,
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Label style={styles.rank}># {item.players![1].rank}</Label>
            </Box>
          </Box>
        </Pressable>
      </Box>
      {bigSize ? (
        <Box style={{height: 20, flexDirection: 'row'}}>
          <Box style={{flex: 1, marginLeft: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Label style={[styles.playerName, styles.playerNameLeft]}>
              {item.players![0].name}
            </Label>
          </Box>
          <Box style={{flex: 1, marginRight: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Label style={[styles.playerName, styles.playerNameRight]}>
              {item.players![1].name}
            </Label>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ScoreListItem;

const customStyles = (t: Theme) =>
  StyleSheet.create({
    background: {
      backgroundColor: t.listBG,
    },
    rank: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontSize: consts.fontSizes.scoreListPlayerRank,
      width: 28,
      marginBottom: 2,
      textAlign: 'center',
    },
    playerName: {
      width: '100%',
      fontSize: consts.fontSizes.scoreListPlayerName,
      color: t.text,
    },
    playerNameLeft: {
      textAlign: 'left',
    },
    playerNameRight: {
      textAlign: 'right',
    },
    score: {
      color: t.score,
      flex: 1,
    },

    msDone: {
      fontSize: consts.fontSizes.scoreListStatusSmall,
      textAlign: 'center',
      marginTop: 0,
      color: t.text,
    },
    msLive: {
      color: t.live,
      fontSize: consts.fontSizes.scoreListStatusSmall,
      textAlign: 'center',
      marginTop: 0,
    },
    msDoneBig: {
      fontSize: consts.fontSizes.scoreListStatusBig,
      textAlign: 'center',
      marginTop: 0,
      color: t.text,
    },
    msLiveBig: {
      color: t.live,
      fontSize: consts.fontSizes.scoreListStatusBig,
      textAlign: 'center',
      marginTop: 0,
    },
  });
