import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl, ScrollView, SectionList, StatusBar } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import RankListItem from '../components/rank-list-item'
import { IPlayer } from '../types/apiTypes'
import { HomeProps } from '../types/navTypes'
import bg_rank from '../assets/bg_ranking.jpg'
import Label from '../components/label'

function RankScreen({ route, navigation }: HomeProps) {
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [updateDate, setUpdateDate] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onRefresh = React.useCallback(() => {
    getPlayerRank()
  }, [loading])

  const getPlayerRank = async () => {
    try {
      setLoading(true)
      setUpdateDate('loading...')
      const response = await snkrApi.get('/ranks', {
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
            <Label style={{ fontSize: 16 }}>There is no data!</Label>
          </Box>
        </ScrollView>
        : <FlatList
          data={players}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RankListItem item={item} />}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />} />

      }

    </Box >
  )
}

export default RankScreen