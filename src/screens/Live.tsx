import React, { useState, useEffect } from 'react'
import { RefreshControl, ScrollView, SectionList, StatusBar } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import ScoreListItem from '../components/score-list-item'
import { IEvent, IRound } from '../types/apiTypes'
import { HomeProps } from '../types/navTypes'
import bg_live from '../assets/bg_live.jpg'
import Label from '../components/label'

function LiveScreen({ route, navigation }: HomeProps) {
  const [rounds, setRounds] = useState<IRound[]>([])
  const [updateDate, setUpdateDate] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onRefresh = React.useCallback(() => {
    getLiveScores()
  }, [loading])

  const getLiveScores = async () => {
    try {
      setLoading(true)
      setUpdateDate('loading...')
      const response = await snkrApi.get('/live_score', {
        params: {

        }
      })
      setUpdateDate(response.data.latestJobs)
      setRounds(response.data.rounds)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
      setErrorMessage('Something whent wrong3')
    }
  }

  useEffect(() => {
    getLiveScores()
  }, [])


  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_live} />
        <HeaderContainer>
          <HeaderTop title='Live Scores' />
          <HeaderBottom rightText={updateDate} />
        </HeaderContainer>
      </Header>

      {!rounds || rounds.length === 0
        ? <ScrollView style={{ flex: 1 }}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
          <Box style={{ flex: 1, marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            {/* picture will come here. */}
            <Label style={{ fontSize: 16 }}>There is no live matches now!</Label>
          </Box>
        </ScrollView>
        : <SectionList
          sections={rounds}
          keyExtractor={(item) => item.recId}
          renderItem={({ item }) => <ScoreListItem item={item} bigSize={true} />}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />} />

      }

    </Box >
  )
}

export default LiveScreen