import React, { useState, useEffect } from 'react'
import { RefreshControl, SectionList, StatusBar } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import ScoreListItem from '../components/score-list-item'
import ScoreListHeader from '../components/score-list-header'
import PlayerDetailModalView from '../components/player-detail-modal-view'

import { IEvent, IPlayer, IRound } from '../types/apiTypes'
import { HomeProps } from '../types/navTypes'
import bg_home from '../assets/bg_home.jpg'

function HomeScreen({ route, navigation }: HomeProps) {
  const [event, setEvent] = useState<IEvent>()
  const [rounds, setRounds] = useState<IRound[]>([])
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>()
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [playerModalVisible, setPlayerModalVisible] = useState(false)

  const onRefresh = React.useCallback(() => {
    getCurrentTour()
  }, [loading])

  const getCurrentTour = async () => {
    try {
      setLoading(true)
      const response = await snkrApi.get('tournament', {})
      setEvent(response.data.event)
      setRounds(response.data.rounds)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
      setErrorMessage('Something went wrong in the getCurrentTour')
    }
  }

  const showPlayerDetail = (player: IPlayer) => {
    setSelectedPlayer(player)
    if (player.id !== '376')
      setPlayerModalVisible(true)
  }

  useEffect(() => {
  }, [event])

  useEffect(() => {
    getCurrentTour()
  }, [])

  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_home} />
        <HeaderContainer>
          <HeaderTop title={event?.name}
            line2={(event?.venue ? event?.venue + ' - ' : '') +
              (event?.city ? event?.city + ' / ' : '') +
              (event?.country ? event?.country : '')}
            line3={event?.sponsor} />
          <HeaderBottom leftText={event?.startDate} middleText={event?.type} rightText={event?.endDate} />
        </HeaderContainer>
      </Header>

      <SectionList
        sections={rounds}
        keyExtractor={(item) => item.recId}
        renderItem={({ item }) => {
          if (item.round === "15" || item.round === "14") {
            return <ScoreListItem item={item} bigSize={true} onPlayerSelected={showPlayerDetail} />
          }
          return <ScoreListItem item={item} onPlayerSelected={showPlayerDetail} />
        }
        }
        renderSectionHeader={({ section: { name, round, distance, numLeft, loosersMoney, winnerMoney, currency } }) => (
          <ScoreListHeader name={name}
            round={round}
            distance={distance}
            numLeft={numLeft}
            loosersMoney={loosersMoney}
            winnerMoney={winnerMoney}
            currency={currency} />
        )}
        style={{ flex: 1 }}

        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}

      />
      <PlayerDetailModalView modalVisible={playerModalVisible} setModalVisible={setPlayerModalVisible} player={selectedPlayer} />
    </Box >
  )
}

export default HomeScreen