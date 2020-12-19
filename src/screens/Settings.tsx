import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, FlatList, Linking, Share, Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import InAppReview from "react-native-in-app-review";

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import { HomeProps } from '../types/navTypes'
import Label from '../components/label'
import bg_settings from '../assets/bg_settings.jpg'
import SettingsItem from '../components/settings-list-item'
import SettingsSwitchItem from '../components/settings-list-switch-item'

import xTheme from '../utils/xTheme'

import RadioGroup, { RadioGroupItem } from '../components/radioGroup'
import { FeedbackIcon, ShareIcon, SnookerOrg, StarIcon, WebIcon } from '../components/icons'

function SettingsScreen({ route, navigation }: HomeProps) {

  const [notify, setNotify] = useState<RadioGroupItem>()
  const [darkMode, setDarkMode] = useState(true)
  const [hideTbd, setHideTbd] = useState(true)

  const notifyItems: RadioGroupItem[] = [
    { id: 0, name: 'All Results' },
    { id: 1, name: 'All Results For Main Events' },
    { id: 2, name: 'Only Finals Results For Main Events' },
    { id: 3, name: 'None (Never Send Notifications)' },
  ];

  const storeNotifyData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@notify', value)
    } catch (e) {
      // saving error
    }
  }

  const storeDarkModeData = async (value: boolean) => {
    try {
      {
        value
          ? await AsyncStorage.setItem('@darkMode', '1')
          : await AsyncStorage.setItem('@darkMode', '0')
      }
      setDarkMode(value)
    } catch (e) {
      // saving error
    }
  }
  const storeTBDData = async (value: boolean) => {
    try {
      {
        value
          ? await AsyncStorage.setItem('@TBD', '1')
          : await AsyncStorage.setItem('@TBD', '0')
      }
      setHideTbd(value)
    } catch (e) {
      // saving error
    }
  }

  const getSettingsData = async () => {
    try {
      const vNotify = await AsyncStorage.getItem('@notify')
      if (vNotify !== null) {
        setNotify(notifyItems[Number(vNotify)])
      }
      const vDarkMode = await AsyncStorage.getItem('@darkMode')
      if (vDarkMode !== null) {
        setDarkMode(vDarkMode !== '0')
      }
      const vTBD = await AsyncStorage.getItem('@TBD')
      if (vTBD !== null) {
        setHideTbd(vTBD !== '0')
      }
    } catch (e) {
      // error reading value
    }
  }

  const onNotifySelected = (item: RadioGroupItem) => {
    setNotify(item);
    storeNotifyData(item.id.toString())
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'You must try this Snooker App. AppLink: http://onelink.to/snooker',
        url: 'http://onelink.to/snooker'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onReview = async () => {
    InAppReview.RequestInAppReview();
  }

  useEffect(() => {
    getSettingsData()
  }, [])

  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_settings} />
        <HeaderContainer>
          <HeaderTop title='Settings' />
          <HeaderBottom rightText='v3.0' />
        </HeaderContainer>
      </Header>

      <FlatList style={{ width: '100%' }}
        nestedScrollEnabled
        data={['Notify', 'Other', 'OurApps', 'AboutUs', 'SpecialThanks']}
        keyExtractor={(data) => data}
        renderItem={({ item, index }) => {
          switch (index) {
            case 0:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>NOTIFICATIONS</Label>
                </Box>
                <RadioGroup items={notifyItems} onSelected={onNotifySelected} selected={notify} />
              </Box>
            case 1:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>OTHER</Label>
                </Box>
                {Platform.OS === 'ios'
                  ? <SettingsItem title='Change App Icon'>
                    <StarIcon width={25} height={25} />
                  </SettingsItem>
                  : <></>
                }
                <SettingsSwitchItem title='Dark Mode' currValue={darkMode} onValueChange={storeDarkModeData} />
                <SettingsSwitchItem title='Hide TBD Matches' currValue={hideTbd} onValueChange={storeTBDData} />
              </Box>;
            case 2:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>OUR APPS</Label>
                </Box>
                <SettingsItem title='FilmBox' detail='Smart Movie Manager' bigSize={true} onPress={() => Linking.openURL('http://onelink.to/filmbox')}></SettingsItem>
                <SettingsItem title='ContactName' detail='Update Your Contacts' bigSize={true} onPress={() => Linking.openURL('https://apps.apple.com/tr/app/contact-name/id911678698?l=tr')} ></SettingsItem>
              </Box>
            case 3:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>ABOUT US</Label>
                </Box>
                <SettingsItem title='Rate Us' onPress={onReview}><StarIcon /></SettingsItem>
                <SettingsItem title='Share App' onPress={onShare}><ShareIcon /></SettingsItem>
                <SettingsItem title='Give Feedback' onPress={() => Linking.openURL('mailto:info@35coders.com?subject=About Snooker App...&body=Hello!')}><FeedbackIcon /></SettingsItem>
                <SettingsItem title='35coders.com' detail='Tayfun Susamcioglu' onPress={() => Linking.openURL('http://www.35coders.com')}><WebIcon /></SettingsItem>
              </Box>
            case 4:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>SPECIAL THANKS</Label>
                </Box>
                <SettingsItem title='Hermund Årdalen' detail='Snooker.org' onPress={() => Linking.openURL('http://www.snooker.org')}><SnookerOrg /></SettingsItem>
              </Box>

            default:
              return null;
          }
        }} />

    </Box >
  )

}

const styles = StyleSheet.create({
  groupHeaderBox: {
    height: 65,
    backgroundColor: xTheme.colors.listHeaderBG
  },
  groupHeaderLabel: {
    marginLeft: 10,
    marginTop: 35,
    fontSize: 18,
    fontWeight: '500',
  }
})

export default SettingsScreen