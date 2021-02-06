import React, { FC, useContext } from 'react'
import { StyleSheet } from 'react-native'

import { ILastestMatches } from '../types/apiTypes'
import Box from './box'
import { LoseIcon, WinIcon } from './icons'
import Label from './label'
import PlayerPhoto from './player-photo'

import consts from '../utils/Consts'
import { Theme, ThemeContext } from '../utils/Themes'


type TPlayerMatchListItemProp = {
  item: ILastestMatches
}

const PlayerMatchListItem: FC<TPlayerMatchListItemProp> = ({ item }) => {
  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme);

  return (
    <Box style={{ flexDirection: 'row' }}>
      <Box style={styles.status}>
        {+item.ownerScore >= +item.playerScore
          ? <WinIcon />
          : <LoseIcon />}
      </Box>
      <Box style={styles.scoreBox}>
        <Label textType='bold' style={{ ...styles.scoreLabel, textAlign: 'right' }}>{item.ownerScore}</Label>
        <Label style={styles.scoreDash}>-</Label>
        <Label textType='bold' style={{ ...styles.scoreLabel, textAlign: 'left' }}>{item.playerScore}</Label>
      </Box>
      <PlayerPhoto style={{ width: 30, height: 30 }} imgUri={item.playerPhotoURL} />
      <Label style={styles.playerName}>{item.playerName}</Label>
      <Label style={styles.round}>{item.roundShort}</Label>
    </Box>
  )
}

export default PlayerMatchListItem


const customStyles = (t: Theme) => StyleSheet.create({
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
    color: t.score,
    width: 25,
    fontSize: consts.fontSizes.playerMatchesScore,
  },
  scoreDash: {
    color: t.score,
    fontSize: consts.fontSizes.playerMatchesScore
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
  }

})