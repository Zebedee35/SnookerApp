import Moment from 'moment';
import { IMatch } from '../types/apiTypes';

export default class Utils {
  static instance = Utils.instance || new Utils()

  getMatchState = (item: IMatch) => {
    if (item.onBreak === "1") {
      return ('break')
    }

    if (item.unfinised === "1") {
      const scheduledDate = Moment(item.scheduledDate, "YYYY-MM-DD HH:mm:ss")
      if (scheduledDate.isBefore(Moment())) {
        return ('live')
      }
      else {
        if (parseInt(item.players[0].score) > 0 || parseInt(item.players[1].score) > 0) {
          return ('live')
        }
        else {
          // return(moment(Date(scheduledDate)).format('DD-MM-YYYY'))
          return 'Tayfun'
        }
      }
    }
    else {
      if (item.endDate === "0000-00-00 00:00:00") {
        const scheduledDate = Moment(item.scheduledDate, "YYYY-MM-DD HH:mm:ss").format("MMM Do")
        return (scheduledDate)
      }
      else {
        return ('done')
      }
    }

  }
}

