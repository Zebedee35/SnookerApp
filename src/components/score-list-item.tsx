import React, { FC, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import { IRound, IMatch } from '../types/apiTypes'
import Utils from '../utils/Utils'
import xTheme from '../utils/xTheme'
import Box from './box'
import Label from './label'
import PlayerPhoto from './player-photo'

const styles = StyleSheet.create({
  msDone: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 0
  },
  msLive: {
    color: xTheme.colors.live,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 0
  }
})

type TScoreListItemProp = {
  // item: IRound
  item: IMatch
}

const ScoreListItem: FC<TScoreListItemProp> = ({ item }) => {

  const [matchState, setMatchState] = useState('')

  useEffect(() => {
    const sMatchState = Utils.instance.getMatchState(item);
    setMatchState(sMatchState)
  })


  function checkMatchState(mstate: string) {
    switch (mstate) {
      case 'done': return <Label style={styles.msDone}>done</Label>
      case 'live': return <Label style={styles.msLive}>live</Label>
      case 'break': return <Label style={styles.msDone}>on Break</Label>
      default:
        return <Box>
          <Label style={styles.msDone}>{mstate}</Label>
        </Box>
    }
  }


  return (
    <Box style={{ flexDirection: 'row', height: 50 }}>

      {/* player 1 */}
      <Box style={{ flex: 1, flexDirection: 'row' }}>
        <Box style={{ width: 44, margin: 3 }}>
          <PlayerPhoto style={{ width: 44, height: 44 }} imgUri={item.players[0].photoURL} />

          <Box style={{ width: 44, height: 82, zIndex: 1, position: 'absolute', alignItems: 'center', justifyContent: 'center' }} >
            <Label style={{ backgroundColor: '#000000', color: '#FFFFFF', fontSize: 10, width: 28, textAlign: 'center' }}># {item.players[0].rank}</Label>
          </Box>
        </Box>

        <Box style={{ flex: 1, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Label style={{ width: '100%', fontSize: 13, textAlign: 'left' }}>{item.players[0].name}</Label>
        </Box>
      </Box>

      {/* Skor Panel */}
      <Box style={{ width: 85, height: '100%' }}>
        <Box style={{ width: '100%', marginTop: 5, flexDirection: 'row' }}>
          <Label textType='medium' style={{ fontSize: 17, textAlign: 'right', color: xTheme.colors.score, flex: 1, }}>{item.players[0].score}</Label>
          <Label textType='medium' style={{ fontSize: 17, textAlign: 'center', color: xTheme.colors.score, flex: 1, }}>-</Label>
          <Label textType='medium' style={{ fontSize: 17, textAlign: 'left', color: xTheme.colors.score, flex: 1, }}>{item.players[1].score}</Label>
        </Box>
        <Box style={{ width: '100%' }}>
          {checkMatchState(matchState)}
        </Box>
      </Box>


      {/* player 2 */}
      <Box style={{ flex: 1, flexDirection: 'row' }}>
        <Box style={{ flex: 1, margin: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Label style={{ width: '100%', fontSize: 13, textAlign: 'right' }}>{item.players[1].name}</Label>
        </Box>
        <Box style={{ width: 44, margin: 3 }}>
          <PlayerPhoto style={{ width: 44, height: 44 }} imgUri={item.players[1].photoURL} />

          <Box style={{ width: 44, height: 82, zIndex: 1, position: 'absolute', alignItems: 'center', justifyContent: 'center' }} >
            <Label style={{ backgroundColor: '#000000', color: '#FFFFFF', fontSize: 10, width: 28, textAlign: 'center' }}># {item.players[0].rank}</Label>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default ScoreListItem