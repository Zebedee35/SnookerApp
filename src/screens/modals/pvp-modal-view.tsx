import React, {FC, useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
  SectionList,
  Dimensions,
} from 'react-native';

import Box from '../../components/box';
import Label from '../../components/label';
import PlayerPhoto from '../../components/player-photo';

import snkrApi from '../../api/snkrApi';
import {IPlayer, IPlayerLatestMatches, ILatestEvents} from '../../types/apiTypes';
import SimpleListHeader from '../../components/simple-list-header';
import PVPMatchListItem from '../../components/pvp-match-list-item';
import {VersusIcon} from '../../components/icons';

import consts from '../../utils/Consts';
import {Theme, ThemeContext} from '../../utils/Themes';

type TPVPModalViewProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  player1: IPlayer;
  player2: IPlayer;
};

const PVPModalView: FC<TPVPModalViewProps> = ({
  modalVisible,
  setModalVisible,
  player1,
  player2,
  children,
}) => {
  const [Latest, setLatest] = useState<IPlayerLatestMatches>();
  const [games, setGames] = useState<ILatestEvents[]>();

  const {currentTheme} = useContext(ThemeContext);
  const styles = customStyles(currentTheme);

  const getPVP = async (p1id: string, p2id: string) => {
    try {
      const response = await snkrApi.get('pvp', {
        params: {
          p1: p1id,
          p2: p2id,
        },
      });
      setLatest(response.data);
      setGames(response.data.games);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setLatest({});
    setGames([]);
    if (player1 && player2) getPVP(player1.id!, player2.id!);
  }, [player1]);

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {}}>
      <Box style={styles.centeredView}>
        {/* <TouchableOpacity style={styles.tapFrame} activeOpacity={1} onPress={() => {
          setModalVisible(false)
        }}> */}
        <Box style={styles.content}>
          {/* Header */}
          <Box style={styles.header}>
            <Box style={styles.sideBox}>
              <PlayerPhoto style={{width: 100, height: 100}} imgUri={player1?.photoURL} />
            </Box>
            <Box>
              <VersusIcon />
              {/* <PlayerPhoto style={{ width: 100, height: 100 }} imgUri={player1?.photoURL} /> */}
            </Box>
            <Box style={{...styles.sideBox, alignItems: 'flex-end'}}>
              <PlayerPhoto style={{width: 100, height: 100}} imgUri={player2?.photoURL} />
            </Box>
          </Box>
          <Box style={styles.header}>
            <Label textType="medium" style={styles.playerName}>
              {player1?.name}
            </Label>
            <Label textType="medium" style={{...styles.playerName, textAlign: 'right'}}>
              {player2?.name}
            </Label>
          </Box>

          <Label textType="bold" style={styles.Latest}>
            All Matches
          </Label>
          <SectionList
            sections={games}
            keyExtractor={(item) => item.roundShort + item.ownerScore + item.playerScore}
            renderItem={({item}) => {
              return <PVPMatchListItem item={item} />;
            }}
            renderSectionHeader={({section: {eventName, scheduledYear}}) => (
              <SimpleListHeader text={eventName} leftText={scheduledYear} rightText={''} />
            )}
            style={{flex: 1, width: 300}}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Label style={styles.buttonText}> Close </Label>
          </TouchableOpacity>
        </Box>
        {/* </TouchableOpacity> */}
      </Box>
    </Modal>
  );
};

export default PVPModalView;

const customStyles = (t: Theme) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: t.modalTransparentBackground,
    },
    tapFrame: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    content: {
      backgroundColor: t.modalWindow,
      padding: 20,
      margin: 20,
      maxHeight: Dimensions.get('window').height - 150,
      height: 800,
      maxWidth: 370,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: consts.borderRadius,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    playerName: {
      fontSize: consts.fontSizes.listItem,
      flex: 1,
      color: t.text,
    },
    caption: {
      fontSize: 12,
      textAlign: 'center',
      marginTop: 10,
      color: t.detail,
    },
    value: {
      fontSize: 16,
      textAlign: 'center',
      color: t.text,
    },
    Latest: {
      fontSize: 18,
      textAlign: 'center',
      color: t.live,
      marginTop: 15,
    },
    sideBox: {
      flex: 1,
    },
    closeButton: {
      backgroundColor: t.tabBar,
      borderRadius: consts.borderRadius,
      marginTop: 20,
      padding: 10,
    },
    buttonText: {
      color: t.textOpposite,
      textAlign: 'center',
      fontSize: 16,
    },
    sectionHeader: {
      width: '100%',
    },
  });
