import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl, ScrollView, SectionList, StatusBar } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Label from '../components/label'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import RankListItem from '../components/rank-list-item'
import PlayerDetailModalView from './modals/player-detail-modal-view'

import { IPlayer } from '../types/apiTypes'
import { HomeProps } from '../types/navTypes'
import bg_rank from '../assets/bg_ranking.jpg'
import xTheme from '../utils/xTheme'

function RankScreen({ route, navigation }: HomeProps) {
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [updateDate, setUpdateDate] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>()
  const [playerModalVisible, setPlayerModalVisible] = useState(false)

  const onRefresh = React.useCallback(() => {
    getPlayerRank()
  }, [loading])

  const getPlayerRank = async () => {
    try {
      setLoading(true)
      setUpdateDate('loading...')
      const response = await snkrApi.get('ranks', {
        params: {

        }
      })
      setUpdateDate('')
      setPlayers(response.data)
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

  useEffect(() => {
    getPlayerRank()
  }, [])


  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_rank} />
        <HeaderContainer>
          <HeaderTop title='Rankings' />
          <HeaderBottom rightText={updateDate} />
        </HeaderContainer>
      </Header>

      {!players || players.length === 0
        ? <ScrollView style={{ flex: 1 }}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
          <Box style={{ flex: 1, marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            {/* picture will come here. */}
            <Label style={{ fontSize: xTheme.fontSizes.listItem }}>There is no data!</Label>
          </Box>
        </ScrollView>
        : <FlatList
          data={players}
          keyExtractor={(item) => item.name! + item.id!}
          renderItem={({ item }) => <RankListItem item={item} onPlayerSelected={showPlayerDetail} />}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />} />
      }
      <PlayerDetailModalView modalVisible={playerModalVisible} setModalVisible={setPlayerModalVisible} player={selectedPlayer} />

    </Box >
  )
}

export default RankScreen