import React, { FC, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import { IPlayer } from '../types/apiTypes'
import Utils from '../utils/Utils'
import xTheme from '../utils/xTheme'
import Box from './box'
import Label from './label'
import PlayerPhoto from './player-photo'

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 0
  },
  score: {
    color: xTheme.colors.detail,
    fontSize: 16,
    marginTop: 5
  },
  rank: {
    fontSize: 48,
    textAlign: 'center',
    color: xTheme.colors.detail,
    marginRight: 10
  }
})

type TRankListItemProp = {
  item: IPlayer
}

const getLocalScore = (sScore: string) => {
  let iScore: Number = +sScore
  return '£ ' + iScore.toLocaleString()
}

const RankListItem: FC<TRankListItemProp> = ({ item }) => {

  return (
    <Box style={{ flex: 1, flexDirection: 'row' }}>
      <PlayerPhoto style={{ width: 80, height: 80 }} imgUri={item.photoURL} />
      <Box style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
        <Label style={styles.name}>{item.name}</Label>
        <Label style={styles.score}>{getLocalScore(item.score!)}</Label>
      </Box>
      <Box>
        <Label style={styles.rank}>{item.rank}</Label>
      </Box>
    </Box>
  )
}

export default RankListItem