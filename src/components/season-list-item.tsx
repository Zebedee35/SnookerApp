import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Moment from 'moment'

import { IEvent } from '../types/apiTypes'
import xTheme from '../utils/xTheme'
import Box from './box'
import Label from './label'

const styles = StyleSheet.create({
  name: {
    fontSize: 21,
    fontWeight: '500',
    marginTop: 0
  },
  detail: {
    color: xTheme.colors.detail,
    fontSize: 16,
    marginTop: 5
  },
  date: {
    color: xTheme.colors.score,
    textAlign: 'center',
    fontSize: 18
  },
  rank: {
    fontSize: 48,
    textAlign: 'center',
    color: xTheme.colors.detail,
    marginRight: 10
  }
})

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


const SeasonListItem: FC<TSeasonListItemProp> = ({ item }) => {

  return (
    <TouchableOpacity>
      <Box style={{ flex: 1, flexDirection: 'row' }}>
        <Box style={{ width: 70, height: 65, justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
          <Label style={styles.date}> {calculateDate(item)}</Label>
        </Box>
        <Box style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
          <Label style={styles.name}>{item.name}</Label>
          <Label style={styles.detail}>{item.type}</Label>
          {/* <Label style={styles.score}>{getLocalScore(item.score!)}</Label> */}
        </Box>
        <Box>
          {/* <Label style={styles.rank}>{item.rank}</Label> */}
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default SeasonListItem