import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Moment from 'moment'

import { IEvent } from '../types/apiTypes'
import Box from './box'
import Label from './label'

import consts from '../utils/Consts'
import { Theme, themes } from '../utils/Themes'

type TSeasonListItemProp = {
  item: IEvent
}

const getMonth = (date?: string) => {
  if (!date || date == '') return 0
  return +date.substring(5, 7)
}

const getDay = (date?: string) => {
  if (!date || date == '') return 0
  return +date.substring(8, 10)
}

const calculateDate = (item: IEvent) => {
  const iStartDay = getDay(item.startDate)
  const iEndDay = getDay(item.endDate)

  const startMonth = Moment(item.startDate, "YYYY-MM-DD HH:mm:ss").format("MMM")
  const endMonth = Moment(item.endDate, "YYYY-MM-DD HH:mm:ss").format("MMM")

  if (startMonth == endMonth) {
    return iStartDay.toString() + '-' + iEndDay.toString() + '\n' + startMonth

  }
  else {
    return iStartDay.toString() + ' ' + startMonth + '\n' +
      iEndDay.toString() + ' ' + endMonth
  }
}

const isPastEvent = (item: IEvent) => {
  return Moment(item.endDate, "YYYY-MM-DD HH:mm:ss").isBefore(Moment())
}

const SeasonListItem: FC<TSeasonListItemProp> = ({ item }) => {
  const styles = customStyles(themes['dark']);

  return (
    <TouchableOpacity>
      <Box style={{ flex: 1, flexDirection: 'row' }}>
        <Box style={{ width: 70, height: 65, justifyContent: 'center' }}>
          <Label style={isPastEvent(item) ? styles.datePass : styles.dateFuture} textType='medium'>{calculateDate(item)}</Label>
        </Box>
        <Box style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
          <Label style={styles.name} textType='medium'>{item.name}</Label>
          <Label style={styles.detail}>{item.type}</Label>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default SeasonListItem

const customStyles = (t: Theme) => StyleSheet.create({
  name: {
    color: t.text,
    fontSize: consts.fontSizes.seasonListName,
    marginTop: 0
  },
  detail: {
    color: t.detail,
    fontSize: consts.fontSizes.seasonListDetail,
    marginTop: 1
  },
  datePass: {
    color: t.detail,
    textAlign: 'center',
    fontSize: consts.fontSizes.seasonListDate
  },
  dateFuture: {
    color: t.tabBar,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: consts.fontSizes.seasonListDate
  },
})