import React, { FC, useEffect, useState } from 'react'

import { IRound, IMatch } from '../types/apiTypes'
import Box from './box'
import Label from './label'


type TScoreListItemProp = {
  // item: IRound
  item: IMatch
}

const ScoreListItem: FC<TScoreListItemProp> = ({ item }) => {
  return (
    <Box>
      {item ?
        <Box>
          <Label>{item.players[0].name}</Label>
          <Label>{item.players[1].name}</Label>
        </Box>
        : <Label>NULL</Label>
      }
    </Box>
  )
}

export default ScoreListItem