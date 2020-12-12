import React, { useState, useEffect } from 'react'
import { Switch, SectionList, StatusBar, ScrollView, StyleSheet, FlatList } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import { HomeProps } from '../types/navTypes'
import Label from '../components/label'
import bg_settings from '../assets/bg_settings.jpg'
import xTheme from '../utils/xTheme'

import { ISettingsGroup, ISettingsItem } from '../types/apiTypes'
import RadioGroup, { RadioGroupItem } from '../components/radioGroup'


function SettingsScreen({ route, navigation }: HomeProps) {
  const [data, setData] = useState<ISettingsGroup[]>([])

  function BigIconAndDetailItem(title: string, detail: string, link: string) {
    return <Box style={{ height: 70, flexDirection: 'row', alignItems: 'center' }}>
      <Box style={{ marginLeft: 10, marginRight: 5, backgroundColor: xTheme.colors.yellow, height: 50, width: 50 }}></Box>
      <Box style={{ marginLeft: 10, flex: 1 }}>
        <Box>
          <Label style={{ fontSize: 17, }}>{title}</Label>
          <Label style={{ fontSize: 15, color: xTheme.colors.detail }}>{detail}</Label>
        </Box>
      </Box>
      <Box style={{ width: 25, height: 25, backgroundColor: xTheme.colors.detail, marginRight: 15 }}></Box>
    </Box>
  }

  function SmallIconItem(title: string, detail: string, link: string) {
    return <Box style={{ height: 48, flexDirection: 'row', alignItems: 'center' }}>
      <Box style={{ marginLeft: 10, marginRight: 5, backgroundColor: xTheme.colors.yellow, height: 30, width: 30 }}></Box>
      <Box style={{ marginLeft: 10, flex: 1 }}>
        <Box>
          <Label style={{ fontSize: 17, }}>{title}</Label>
          {detail === ''
            ? <></>
            : <Label style={{ fontSize: 15, color: xTheme.colors.detail }}>{detail}</Label>}
        </Box>
      </Box>
      <Box style={{ width: 25, height: 25, backgroundColor: xTheme.colors.detail, marginRight: 15 }}></Box>
    </Box>
  }
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
                {SmallIconItem('Change App Icon', '', '')}
                {SwitchItem('Dark Mode', true)}
                {SwitchItem('Hide TBD Matches', true)}
              </Box>;
            case 2:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>OUR APPS</Label>
                </Box>
                {BigIconAndDetailItem('FilmBox', 'Smart Movie Manager', '')}
                {BigIconAndDetailItem('ContactName', 'Update Your Contacts', '')}
              </Box>
            case 3:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>ABOUT US</Label>
                </Box>
                {SmallIconItem('Rate Us', '', '')}
                {SmallIconItem('Share App', '', '')}
                {SmallIconItem('Give Feedback', '', '')}
                {SmallIconItem('35coders.com', 'Tayfun Susamcioglu', '')}

              </Box>
            case 4:
              return <Box>
                <Box style={styles.groupHeaderBox}>
                  <Label style={styles.groupHeaderLabel}>SPECIAL THANKS</Label>
                </Box>
                {SmallIconItem('Hermund Årdalen', 'Snooker.org', '')}

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