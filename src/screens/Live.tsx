import React, { useState, useEffect } from 'react'
import { RefreshControl, SectionList, StatusBar } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import ScoreListItem from '../components/score-list-item'
import { IEvent, IRound } from '../types/apiTypes'
import { HomeProps } from '../types/navTypes'
import bg_live from '../assets/bg_live.jpg'

function LiveScreen({ route, navigation }: HomeProps) {
  const [rounds, setRounds] = useState<IRound[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onRefresh = React.useCallback(() => {
    getLiveScores()
  }, [loading])

  const getLiveScores = async () => {
    try {
      setLoading(true)
      const response = await snkrApi.get('/live_score', {
        params: {

        }
      })
      setRounds(response.data.rounds)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
      setErrorMessage('Something whent wrong3')
    }
  }

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