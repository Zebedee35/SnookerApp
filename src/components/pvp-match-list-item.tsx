import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { ILastestMatches } from '../types/apiTypes'
import xTheme from '../utils/xTheme'
import Box from './box'
import { LoseIcon, WinIcon } from './icons'
import Label from './label'

type TPVPListItemProp = {
  item: ILastestMatches
}

const PVPMatchListItem: FC<TPVPListItemProp> = ({ item }) => {

  return (
    <Box style={{ flexDirection: 'row' }}>
      <Box style={styles.status}>
        {+item.ownerScore >= +item.playerScore
          ? <WinIcon />
          : <LoseIcon />}
      </Box>
      <Box style={styles.scoreBox}>
        <Label textType='bold' style={{ ...styles.scoreLabel, textAlign: 'right' }}>{item.ownerScore}</Label>
        <Label style={{ color: xTheme.colors.detail, fontSize: xTheme.fontSizes.pvpMatchesScore }}> - </Label>
        <Label textType='bold' style={{ ...styles.scoreLabel, textAlign: 'left' }}>{item.playerScore}</Label>
      </Box>
      <Box style={styles.status}>
        {+item.ownerScore < +item.playerScore
          ? <WinIcon />
          : <LoseIcon />}
      </Box>
    </Box>
  )
}

export default PVPMatchListItem


const styles = StyleSheet.create({
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
    color: xTheme.colors.score,
    flex: 1,
    fontSize: xTheme.fontSizes.pvpMatchesScore,
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