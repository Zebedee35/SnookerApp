import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl, ScrollView, SectionList, StatusBar } from 'react-native'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import { HomeProps } from '../types/navTypes'
import bg_season from '../assets/bg_season.jpg'
import Label from '../components/label'

import snkrApi from '../api/snkrApi'
import { IEvent, ISeason, ISeasons } from '../types/apiTypes'
import SeasonListItem from '../components/season-list-item'

function SeasonScreen({ route, navigation }: HomeProps) {
  const [response, setResponse] = useState<ISeasons>()
  const [events, setEvents] = useState<IEvent[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedSeasonText, setSelectedSeasonText] = useState('')
  const [loading, setLoading] = useState(false)

  const getSeasons = async () => {
    try {
      setLoading(true)
      const apiResponse = await snkrApi.get('seasons/', {
        params: {
        }
      })
      setResponse(apiResponse.data)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
      setErrorMessage('Something whent wrong3')
    }
  }

  const getEvents = async (year: string) => {
    try {
      console.log('getEvents...' + year)
      setLoading(true)
      const response = await snkrApi.get('seasonEvents/year/', {
        params: {
          year: year
        }
      })
      setEvents(response.data)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
      setErrorMessage('Something whent wrong3')
    }
  }

  const onRefresh = React.useCallback(() => {
    getEvents('2020')
  }, [loading])

  useEffect(() => {
    getSeasons()
  }, [])

  useEffect(() => {
    if (response && response.detail && response.detail.length > 0) {
      setSelectedSeason(response.detail[0].year!)
      setSelectedSeasonText(response.detail[0].season!)
    }
  }, [response])

  useEffect(() => {
    getEvents(selectedSeason)
  }, [selectedSeason])

  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_season} />
        <HeaderContainer>
          <HeaderTop title='Seasons' />
          <HeaderBottom middleText={selectedSeasonText} />
        </HeaderContainer>
      </Header>

      <FlatList
        data={events}
        keyExtractor={(item) => item.recID}
        renderItem={({ item }) => <SeasonListItem item={item} />}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </Box >
  )
}

export default SeasonScreen