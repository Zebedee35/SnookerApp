import React, { useState, useEffect } from 'react'
import { RefreshControl, SectionList, StatusBar } from 'react-native'
import snrkApi from '../api/snrkApi'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import ScoreListItem from '../components/score-list-item'
import { IEvent, IRound } from '../types/apiTypes'
import { HomeProps } from '../types/navTypes'
import bg_live from '../assets/bg_live.jpg'

function LiveScreen({ route, navigation }: HomeProps) {
  const [event, setEvent] = useState<IEvent>()
  const [rounds, setRounds] = useState<IRound[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)


  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_live} />
        <HeaderContainer>
          <HeaderTop title='Live Scores' />
          <HeaderBottom rightText='updataDate' />
        </HeaderContainer>
      </Header>

    </Box >
  )
}

export default LiveScreen