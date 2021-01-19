import React, { useState, useEffect } from 'react'
import { RefreshControl, ScrollView, SectionList, StatusBar, Image } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Label from '../components/label'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import ScoreListItem from '../components/score-list-item'
import PlayerDetailModalView from './modals/player-detail-modal-view'
import PVPModalView from './modals/pvp-modal-view'

import { IPlayer, IRound } from '../types/apiTypes'
import { HomeProps } from '../types/navTypes'
import bg_live from '../assets/bg_live.jpg'
import xTheme from '../utils/xTheme'

function LiveScreen({ route, navigation }: HomeProps) {
  const [rounds, setRounds] = useState<IRound[]>([])
  const [updateDate, setUpdateDate] = useState('')
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>()
  const [selectedPlayer2, setSelectedPlayer2] = useState<IPlayer>()
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [playerModalVisible, setPlayerModalVisible] = useState(false)
  const [pvpModalVisible, setPvpModalVisible] = useState(false)

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

  const showPlayerDetail = (player: IPlayer) => {
    setSelectedPlayer(player)
    if (player.id !== '376')
      setPlayerModalVisible(true)
  }

  const showPVP = (player1: IPlayer, player2: IPlayer) => {
    setSelectedPlayer(player1)
    setSelectedPlayer2(player2)
    if (player1.id !== '376' && player2.id !== '376')
      setPvpModalVisible(true)
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
            <Image source={require('../assets/closed.png')} />
            <Label style={{ fontSize: xTheme.fontSizes.listItem }}>There is no live matches now!</Label>
          </Box>
        </ScrollView>
        : <SectionList
          sections={rounds}
          keyExtractor={(item) => item.recId}
          renderItem={({ item }) => <ScoreListItem item={item} bigSize={true} onPlayerSelected={showPlayerDetail} onPVPSelected={showPVP} />}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />} />

      }
      <PlayerDetailModalView modalVisible={playerModalVisible} setModalVisible={setPlayerModalVisible} player={selectedPlayer} />
      <PVPModalView modalVisible={pvpModalVisible} setModalVisible={setPvpModalVisible} player1={selectedPlayer} player2={selectedPlayer2} />
    </Box >
  )
}

export default LiveScreen