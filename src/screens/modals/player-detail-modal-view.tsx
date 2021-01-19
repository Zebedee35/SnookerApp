import React, { FC, useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Pressable, Modal, SectionList, Image, Dimensions } from 'react-native'

import xTheme from '../../utils/xTheme'
import Box from '../../components/box'
import Label from '../../components/label'
import PlayerPhoto from '../../components/player-photo'

import snkrApi from '../../api/snkrApi';
import { IPlayer, IPlayerLastestMatches, ILastestEvents } from '../../types/apiTypes'
import SimpleListHeader from '../../components/simple-list-header'
import PlayerMatchListItem from '../../components/player-match-list-item'


type TPlayerDetailModalViewProps = {
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  player: IPlayer | undefined,
}

const PlayerDetailModalView: FC<TPlayerDetailModalViewProps> = ({ modalVisible, setModalVisible, player, children }) => {
  const [lastest, setLastest] = useState<IPlayerLastestMatches>()
  const [games, setGames] = useState<ILastestEvents[]>()

  const getLastestMatches = async (id: string) => {
    try {
      const response = await snkrApi.get('playerMatches', {
        params: {
          playerId: id
        }
      })
      setLastest(response.data)
      setGames(response.data.games)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setLastest({})
    setGames([])
    getLastestMatches(player?.id)
  }, [player])

  return (
    <Modal
      animationType='fade' transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
      }}

    >
      <Box style={styles.centeredView}>

        {/* <Pressable style={styles.tapFrame} activeOpacity={1} onPress={() => {
          setModalVisible(!modalVisible)
        }}> */}
        <Box style={styles.content}>
          {/* Header */}
          <Box style={styles.header}>
            <Box style={styles.sideBox}>
              <Label style={styles.caption}>Ranking</Label>
              <Label textType='bold' style={styles.value}>{player?.rank}</Label>
              <Label style={styles.caption}>Turned Pro</Label>
              <Label textType='bold' style={styles.value}>{player?.pro}</Label>
            </Box>
            <PlayerPhoto style={{ width: 100, height: 100 }} imgUri={player?.photoURL} />
            <Box style={styles.sideBox}>
              <Box style={{ width: '100%', alignItems: 'center' }}>
                <Image source={require('../../assets/flags/mini/gb-wls.png')} style={{ width: 48, height: 36 }} />
              </Box>
              <Label style={{ ...styles.value, fontSize: 14 }}>{player?.country}</Label>
              <Label style={styles.caption}>Date of Birth</Label>
              <Label textType='bold' style={styles.value}>{player?.born}</Label>
            </Box>
          </Box>

          <Label textType='bold' style={styles.playerName}>{player?.name}</Label>
          <Label textType='bold' style={styles.lastest}>Lastest Matches</Label>
          <SectionList
            sections={games}
            keyExtractor={(item) => item.roundShort + item.playerId}
            renderItem={({ item }) => {
              return <PlayerMatchListItem item={item} />
            }
            }
            renderSectionHeader={({ section: { eventName } }) => (
              <SimpleListHeader text={eventName} />
            )}
            style={{ flex: 1, width: 300 }}

          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <Label style={styles.buttonText}> Close </Label>
          </TouchableOpacity>
        </Box>
        {/* </Pressable> */}
      </Box>
    </Modal>
  )
}

export default PlayerDetailModalView

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: xTheme.colors.modalTransparentBackground
  },
  tapFrame: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    maxHeight: Dimensions.get('window').height - 150,
    height: 800,
    maxWidth: 370,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: xTheme.borderRadius,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  header: {
    flexDirection: 'row'
  },
  playerName: {
    fontSize: xTheme.fontSizes.playerDetailName,
    color: xTheme.colors.text
  },
  caption: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    color: xTheme.colors.detail,
  },
  value: {
    fontSize: 16,
    textAlign: 'center',
    color: xTheme.colors.text,
  },
  lastest: {
    fontSize: 18,
    textAlign: 'center',
    color: xTheme.colors.live,
    marginTop: 15,
  },
  sideBox: {
    flex: 1,
  },
  closeButton: {
    backgroundColor: xTheme.colors.tabBar,
    borderRadius: xTheme.borderRadius,
    marginTop: 20,
    padding: 10
  },
  buttonText: {
    color: xTheme.colors.negative,
    textAlign: "center",
    fontSize: 16
  },
  sectionHeader: {
    width: '100%'
  }
});
