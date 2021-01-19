import React, { FC, useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Pressable, Modal, SectionList, Image } from 'react-native'

import xTheme from '../../utils/xTheme'
import Box from '../../components/box'
import Label from '../../components/label'
import PlayerPhoto from '../../components/player-photo'

import snkrApi from '../../api/snkrApi';
import { IPlayer, IPlayerLastestMatches, ILastestEvents } from '../../types/apiTypes'
import SimpleListHeader from '../../components/simple-list-header'
import PVPMatchListItem from '../../components/pvp-match-list-item'
import { VersusIcon } from '../../components/icons'


type TPVPModalViewProps = {
  modalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  player1: IPlayer,
  player2: IPlayer,
}

const PVPModalView: FC<TPVPModalViewProps> = ({ modalVisible, setModalVisible, player1, player2, children }) => {
  const [lastest, setLastest] = useState<IPlayerLastestMatches>()
  const [games, setGames] = useState<ILastestEvents[]>()

  const getPVP = async (p1id: string, p2id: string) => {
    try {
      const response = await snkrApi.get('pvp', {
        params: {
          p1: p1id,
          p2: p2id
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
    if (player1 && player2)
      getPVP(player1.id!, player2.id!)
  }, [player1])

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
              <PlayerPhoto style={{ width: 100, height: 100 }} imgUri={player1?.photoURL} />
            </Box>
            <Box>
              <VersusIcon />
              {/* <PlayerPhoto style={{ width: 100, height: 100 }} imgUri={player1?.photoURL} /> */}
            </Box>
            <Box style={{ ...styles.sideBox, alignItems: 'flex-end' }}>
              <PlayerPhoto style={{ width: 100, height: 100 }} imgUri={player2?.photoURL} />
            </Box>
          </Box>

          <Label textType='bold' style={styles.playerName}>{player1?.name}</Label>
          <Label textType='bold' style={styles.lastest}>All Matches</Label>
          <SectionList
            sections={games}
            keyExtractor={(item) => item.roundShort + item.ownerScore + item.playerScore}
            renderItem={({ item }) => {
              return <PVPMatchListItem item={item} />
            }
            }
            renderSectionHeader={({ section: { eventName, scheduledYear } }) => (
              <SimpleListHeader text={eventName} leftText={scheduledYear} rightText={''} />
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

export default PVPModalView

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
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: xTheme.borderRadius,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  playerName: {
    fontSize: 20,
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
