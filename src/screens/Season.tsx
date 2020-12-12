import React, { useState, useEffect } from 'react'
import { FlatList, RefreshControl, ScrollView, SectionList, StatusBar } from 'react-native'
import snkrApi from '../api/snkrApi'

import Box from '../components/box'
import Header, { HeaderBottom, HeaderContainer, HeaderImage, HeaderTop } from '../components/header'
import RankListItem from '../components/rank-list-item'
import { HomeProps } from '../types/navTypes'
import bg_season from '../assets/bg_season.jpg'
import Label from '../components/label'

function SeasonScreen({ route, navigation }: HomeProps) {

  return (
    <Box style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Header>
        <HeaderImage imageUri={bg_season} />
        <HeaderContainer>
          <HeaderTop title='Seasons' />
        </HeaderContainer>
      </Header>


    </Box >
  )
}

export default SeasonScreen