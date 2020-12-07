import React, { FC, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import { IEvent } from '../types/apiTypes'

import Box from './box'
import Label from './label'

import xTheme from '../utils/xTheme'


type TScoreListHeaderProp = {
  name: string
  round: string
  distance: string
  numLeft: string
  loosersMoney: string
  winnerMoney: string
  currency: string
}

const ScoreListHeader: FC<TScoreListHeaderProp> = ({ name, round, distance, numLeft, loosersMoney, winnerMoney, currency }) => {


  return (
    <Box style={{ backgroundColor: xTheme.colors.listHeaderBG }}>
      <Label style={styles.name}>{name}</Label>
      <Label style={styles.detail}>
        (
          {round == '15' ? (+distance > 0 ? `Best of ${+distance * 2 - 1}; ` : 'D') + `Winner: ${currency} ${winnerMoney}; Runner-up: ${currency} ${loosersMoney}`
          : (+numLeft > 9 ? `Last ${+numLeft}; ` : '') +
          (+distance > 0 ? `Best of ${+distance * 2 - 1}` : ``) +
          (loosersMoney !== '' ? `; Losers receive ${currency} ${loosersMoney}` : `A`)
        }
  )
      </Label>

    </Box>
  )
}

const styles = StyleSheet.create({
  name: {
    width: '100%',
    height: 30,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    marginTop: 2,
  },
  detail: {
    width: '100%',
    height: 20,
    textAlign: 'center',
    fontSize: 13,
    marginTop: -3,
  }
})


{/* <ShadowBox  bg="listHeaderBGColor" {...props}>
<Label width='100%' height={30} textAlign='center' fontSize={22} fontWeight='500' mt={2} adjustsFontSizeToFit>{name}</Label>
<Label width='100%' height={20} textAlign='center' fontSize={13} color="detailTextColor" mt={-3}>
  (
  {round == 15 ? ( distance > 0 ? `Best of ${distance * 2 - 1}; ` : '')  + `Winner: ${currency} ${winnerMoney}; Runner-up: ${currency} ${loosersMoney}` 
  : (numLeft > 9 ? `Last ${numLeft}; ` : '' ) + 
    (distance > 0 ? `Best of ${distance * 2 - 1}` : `` ) + 
    (loosersMoney > 0 ? `; Losers receive ${currency} ${loosersMoney}` : ``)
    }
  )
</Label>
</ShadowBox> */}

export default ScoreListHeader