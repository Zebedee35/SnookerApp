import React, {useState, useEffect, useContext} from 'react';
import {RefreshControl, SectionList, StatusBar, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import snkrApi from '../api/snkrApi';

import Box from '../components/box';
import Header, {HeaderBottom, HeaderContainer, HeaderImage, HeaderTop} from '../components/header';
import ScoreListItem from '../components/score-list-item';
import ScoreListHeader from '../components/score-list-header';
import PlayerDetailModalView from './modals/player-detail-modal-view';
import PVPModalView from './modals/pvp-modal-view';

import {IEvent, IPlayer, IRound} from '../types/apiTypes';
import {HomeProps} from '../types/navTypes';
import bg_home from '../assets/bg_home.jpg';
import {Theme, ThemeContext} from '../utils/Themes';

function HomeScreen({route, navigation}: HomeProps) {
  const [event, setEvent] = useState<IEvent>();
  const [rounds, setRounds] = useState<IRound[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>();
  const [selectedPlayer2, setSelectedPlayer2] = useState<IPlayer>();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [playerModalVisible, setPlayerModalVisible] = useState(false);
  const [pvpModalVisible, setPvpModalVisible] = useState(false);

  const {currentTheme} = useContext(ThemeContext);
  const styles = customStyles(currentTheme);

  const onRefresh = React.useCallback(() => {
    getCurrentTour();
  }, [loading]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      getCurrentTour();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    // getCurrentTour();
  }, []);

  const getCurrentTour = async () => {
    try {
      setLoading(true);
      let showTBD = false
      const vTBD = await AsyncStorage.getItem('@TBD');
      if (vTBD !== null) {
        showTBD = vTBD !== '0';
      }

      const response = await snkrApi.get('tournament', {
        params: {
          hide: showTBD,
        },
      });

      setEvent(response.data.event);
      setRounds(response.data.rounds);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setErrorMessage('Something went wrong in the getCurrentTour');
    }
  };

  const showPlayerDetail = (player: IPlayer) => {
    setSelectedPlayer(player);
    if (player.id !== '376') setPlayerModalVisible(true);
  };

  const showPVP = (player1: IPlayer, player2: IPlayer) => {
    setSelectedPlayer(player1);
    setSelectedPlayer2(player2);
    if (player1.id !== '376' && player2.id !== '376') setPvpModalVisible(true);
  };

  return (
    <Box style={styles.background}>
      <StatusBar barStyle="light-content" />
      <Header>
        <HeaderImage imageUri={bg_home} />
        <HeaderContainer>
          <HeaderTop
            title={event?.name}
            line2={
              (event?.venue ? `${event?.venue} - ` : '') +
              (event?.city ? `${event?.city} / ` : '') +
              (event?.country ? event?.country : '')
            }
            line3={event?.sponsor}
          />
          <HeaderBottom
            leftText={event?.startDate}
            middleText={event?.type}
            rightText={event?.endDate}
          />
        </HeaderContainer>
      </Header>

      <SectionList
        sections={rounds}
        keyExtractor={(item) => item.recId}
        renderItem={({item}) => {
          if (item.round === '15' || item.round === '14') {
            return (
              <ScoreListItem
                item={item}
                bigSize
                onPlayerSelected={showPlayerDetail}
                onPVPSelected={showPVP}
              />
            );
          }
          return (
            <ScoreListItem
              item={item}
              onPlayerSelected={showPlayerDetail}
              onPVPSelected={showPVP}
            />
          );
        }}
        renderSectionHeader={({
          section: {name, round, distance, numLeft, looserMoney, winnerMoney, currency},
        }) => (
          <ScoreListHeader
            name={name}
            round={round}
            distance={distance}
            numLeft={numLeft}
            looserMoney={looserMoney}
            winnerMoney={winnerMoney}
            currency={currency}
          />
        )}
        style={{flex: 1}}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
      <PlayerDetailModalView
        modalVisible={playerModalVisible}
        setModalVisible={setPlayerModalVisible}
        player={selectedPlayer}
      />
      <PVPModalView
        modalVisible={pvpModalVisible}
        setModalVisible={setPvpModalVisible}
        player1={selectedPlayer}
        player2={selectedPlayer2}
      />
    </Box>
  );
}

export default HomeScreen;

const customStyles = (t: Theme) =>
  StyleSheet.create({
    background: {
      backgroundColor: t.listBG,
      flex: 1,
    },
  });
