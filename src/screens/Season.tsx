import React, { useState, useEffect, useContext } from 'react'
import { FlatList, RefreshControl, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import { HomeProps } from '../types/navTypes'
import bg_season from '../assets/bg_season.jpg'
import Label from '../components/label'

import snkrApi from '../api/snkrApi'
import { IEvent, ISeason, ISeasons } from '../types/apiTypes'
import SeasonListItem from '../components/season-list-item'
import consts from '../utils/Consts'
import SeasonListModalView from './modals/season-list-modal-view'

import { Theme, ThemeContext } from '../utils/Themes'

function SeasonScreen({ route, navigation }: HomeProps) {
  const [response, setResponse] = useState<ISeasons>()
  const [events, setEvents] = useState<IEvent[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedSeasonText, setSelectedSeasonText] = useState('')
  const [loading, setLoading] = useState(false)
  const [sesionModalVisible, setSesionModalVisible] = useState(false);

  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme);

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
      setLoading(true)
      const responseEvents = await snkrApi.get('seasonEvents/', {
        params: {
          year: year
        }
      })
      setEvents(responseEvents.data)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
      setErrorMessage('Something whent wrong3')
    }
  }
  const onPressSeasons = () => {
    setSesionModalVisible(!sesionModalVisible)
  }

  const onSeasonSelected = (item: ISeason) => {
    setSelectedSeason(item.year!)
    setSelectedSeasonText(item.season!)
    setSesionModalVisible(!sesionModalVisible)
  }

  const onRefresh = React.useCallback(() => {
    getEvents(selectedSeason)
  }, [loading])

  useEffect(() => {
    getEvents(selectedSeason)
  }, [selectedSeason])

  useEffect(() => {
    if (response && response.detail && response.detail.length > 0) {
      setSelectedSeason(response.detail[0].year!)
      setSelectedSeasonText(response.detail[0].season!)
    }
  }, [response])

  useEffect(() => {
    getSeasons()
  }, [])

  return (
    <Box style={styles.background}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_season} />
        <HeaderContainer>
          <HeaderTop title='Seasons' />
          <HeaderBottom>
            <Box style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={onPressSeasons}
                style={styles.listItem}>
                <Label style={{ fontSize: 18 }} >{selectedSeasonText}</Label>
              </TouchableOpacity>
            </Box>
          </HeaderBottom>
        </HeaderContainer>
      </Header>

      <FlatList
        data={events}
        keyExtractor={(item) => { return item.name + item.recID }}
        renderItem={({ item }) => <SeasonListItem item={item} />}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
      <SeasonListModalView modalVisible={sesionModalVisible}
        dataList={response?.detail}
        onSeasonSelected={onSeasonSelected}
        setModalVisible={setSesionModalVisible} />
    </Box >
  )
}

export default SeasonScreen

const customStyles = (t: Theme) => StyleSheet.create({
  background: {
    backgroundColor: t.listBG,
    flex: 1
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: t.tabBar,
    padding: 8,
    borderRadius: consts.borderRadius
  },
})