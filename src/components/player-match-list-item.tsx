import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { ILastestMatches } from '../types/apiTypes'
import xTheme from '../utils/xTheme'
import Box from './box'
import { LoseIcon, WinIcon } from './icons'
import Label from './label'
import PlayerPhoto from './player-photo'

type TPlayerMatchListItemProp = {
  item: ILastestMatches
}

const PlayerMatchListItem: FC<TPlayerMatchListItemProp> = ({ item }) => {

  return (
    <Box style={{ flexDirection: 'row' }}>
      <Box style={styles.status}>
        {+item.ownerScore >= +item.playerScore
          ? <WinIcon />
          : <LoseIcon />}
      </Box>
      <Box style={styles.scoreBox}>
        <Label textType='bold' style={{ ...styles.scoreLabel, textAlign: 'right' }}>{item.ownerScore}</Label>
        <Label style={{ color: xTheme.colors.detail, fontSize: xTheme.fontSizes.playerMatchesScore }}>-</Label>
        <Label textType='bold' style={{ ...styles.scoreLabel, textAlign: 'left' }}>{item.playerScore}</Label>
      </Box>
      <PlayerPhoto style={{ width: 30, height: 30 }} imgUri={item.playerPhotoURL} />
      <Label style={styles.playerName}>{item.playerName}</Label>
      <Label style={styles.round}>{item.roundShort}</Label>
    </Box>
  )
}

export default PlayerMatchListItem


const styles = StyleSheet.create({
  status: {
    width: 22,
    height: 22,
    marginTop: 4,
  },
  scoreBox: {
    flexDirection: 'row',
    width: 60,
    marginTop: 5,
  },
  scoreLabel: {
    color: xTheme.colors.score,
    width: 25,
    fontSize: xTheme.fontSizes.playerMatchesScore,
  },
  playerName: {
    flex: 1,
    marginLeft: 5,
    marginTop: 5,
    color: xTheme.colors.text,
    fontSize: xTheme.fontSizes.scoreListPlayerName,
  },
  round: {
    color: xTheme.colors.detail,
    fontSize: xTheme.fontSizes.scoreListPlayerName,
    marginTop: 5,
  }

})