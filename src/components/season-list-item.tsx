import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Moment from 'moment'

import { IEvent } from '../types/apiTypes'
import xTheme from '../utils/xTheme'
import Box from './box'
import Label from './label'

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

const styles = StyleSheet.create({
  name: {
    fontSize: xTheme.fontSizes.seasonListName,
    marginTop: 0
  },
  detail: {
    color: xTheme.colors.detail,
    fontSize: xTheme.fontSizes.seasonListDetail,
    marginTop: 1
  },
  datePass: {
    color: xTheme.colors.detail,
    textAlign: 'center',
    fontSize: xTheme.fontSizes.seasonListDate
  },
  dateFuture: {
    color: xTheme.colors.score,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: xTheme.fontSizes.seasonListDate
  },
})