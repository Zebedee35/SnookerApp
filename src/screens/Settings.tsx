import React, { useState } from 'react'
import { Switch, StatusBar, StyleSheet, FlatList } from 'react-native'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import { HomeProps } from '../types/navTypes'
import Label from '../components/label'
import bg_settings from '../assets/bg_settings.jpg'
import SettingsItem from '../components/settings-list-item'

import xTheme from '../utils/xTheme'

import RadioGroup, { RadioGroupItem } from '../components/radioGroup'
import { FeedbackIcon, ShareIcon, SnookerOrg, StarIcon, WebIcon } from '../components/icons'

function SettingsScreen({ route, navigation }: HomeProps) {
  function SwitchItem(title: string, currValue: boolean) {
    return <Box style={{ height: 48, flexDirection: 'row', alignItems: 'center' }}>
      <Box style={{ marginLeft: 10, flex: 1 }}>
        <Box>
          <Label style={{ fontSize: 17, }}>{title}</Label>
        </Box>
      </Box>
      <Switch
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={() => null}
        value={currValue}
        style={{ marginRight: 15 }}
      />
    </Box>
  }

  const [notify, setNotify] = useState<RadioGroupItem>()

  const notifyItems: RadioGroupItem[] = [
    { id: 1, name: 'All Results' },
    { id: 2, name: 'All Results For Main Events' },
    { id: 3, name: 'Only Finals Results For Main Events' },
    { id: 4, name: 'None (Never Send Notifications)' },
  ];

  const onNotifySelected = (item: RadioGroupItem) => {
    setNotify(item);
  };

  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_settings} />
        <HeaderContainer>
          <HeaderTop title='Settings' />
          <HeaderBottom rightText='v2.0' />
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
                <SettingsItem title='Change App Icon'>
                  <StarIcon width={25} height={25} />
                </SettingsItem>
                {SwitchItem('Dark Mode', true)}
                {SwitchItem('Hide TBD Matches', true)}
              </Box>;
            case 2:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>OUR APPS</Label>
                </Box>
                <SettingsItem title='FilmBox' detail='Smart Movie Manager' bigSize={true}></SettingsItem>
                <SettingsItem title='ContactName' detail='Update Your Contacts' bigSize={true}></SettingsItem>
              </Box>
            case 3:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>ABOUT US</Label>
                </Box>
                <SettingsItem title='Rate Us'><StarIcon /></SettingsItem>
                <SettingsItem title='Share App'><ShareIcon /></SettingsItem>
                <SettingsItem title='Give Feedback'><FeedbackIcon /></SettingsItem>
                <SettingsItem title='35coders.com' detail='Tayfun Susamcioglu'><WebIcon /></SettingsItem>
              </Box>
            case 4:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>SPECIAL THANKS</Label>
                </Box>
                <SettingsItem title='Hermund Årdalen' detail='Snooker.org'><SnookerOrg /></SettingsItem>
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
    height: 40,
    backgroundColor: xTheme.colors.listHeaderBG
  },
  groupHeaderLabel: {
    marginLeft: 10,
    marginTop: 7,
    fontSize: 18,
    fontWeight: '500',
  }
})

export default SettingsScreen