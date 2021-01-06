import React, { useState, useEffect } from 'react'
import { FlatList, Modal, RefreshControl, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import { HomeProps } from '../types/navTypes'
import bg_season from '../assets/bg_season.jpg'
import Label from '../components/label'

import snkrApi from '../api/snkrApi'
import { IEvent, ISeason, ISeasons } from '../types/apiTypes'
import SeasonListItem from '../components/season-list-item'
import xTheme from '../utils/xTheme'

function SeasonScreen({ route, navigation }: HomeProps) {
  const [response, setResponse] = useState<ISeasons>()
  const [events, setEvents] = useState<IEvent[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedSeasonText, setSelectedSeasonText] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

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
      const response = await snkrApi.get('seasonEvents/', {
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
  const onPressSeasons = () => {
    setModalVisible(!modalVisible)
  }

  const onSeasonSelected = (item: ISeason) => {
    setSelectedSeason(item.year!)
    setSelectedSeasonText(item.season!)
    setModalVisible(!modalVisible)
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
          <HeaderBottom>
            <Box style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={onPressSeasons}
                style={{ flexDirection: 'row', backgroundColor: xTheme.colors.tabBar, padding: 5, borderRadius: xTheme.borderRadius }}>
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
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
        }}
      >
        <Box style={styles.centeredView}>
          <Box style={styles.modalView}>
            <Label textType='bold' style={styles.modalText}>Season List</Label>
            <FlatList
              data={response?.detail}
              keyExtractor={(item) => { return '' + item.season }}
              renderItem={({ item }) => <TouchableOpacity style={{ height: 40 }} onPress={() => onSeasonSelected(item)}>
                <Label style={{ flex: 1, fontSize: 16, textAlign: 'center' }}>{item.season}</Label>
              </TouchableOpacity>}
              style={{ width: 100 }}
            />
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: xTheme.colors.tabBar }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Label style={styles.textStyle}> Cancel </Label>
            </TouchableOpacity>
          </Box>
        </Box>
      </Modal>
    </Box >
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modalView: {
    margin: 2,
    width: 200,
    height: 350,
    backgroundColor: "white",
    borderRadius: xTheme.borderRadius,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: xTheme.borderRadius,
    marginTop: 20,
    padding: 10
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 16
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18
  }
});


export default SeasonScreen