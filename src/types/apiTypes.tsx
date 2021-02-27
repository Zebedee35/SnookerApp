export interface ISeasons {
  status?: string; // "2020"
  detail?: ISeason[]; // "2020-21"
}

export interface ISeason {
  year?: string; // "2020"
  season?: string; // "2020-21"
}

export interface IEvent {
  recID: string;
  name?: string; // "UK Championship"
  startDate?: string; // "24 Nov 2020"
  endDate?: string; // "06 Dec 2020"
  sponsor?: string; // "Betway"
  season?: string; // "2020"
  type?: string; // "Ranking"
  num?: string; // "0"
  venue?: string; // "Marshall Arena"
  city?: string; // "Milton Keynes"
  country?: string; // "England"
  discipline?: string; // "snooker"
  main?: string; // "1012"
  sex?: string; // "Both"
  ageGroup?: string; // "O"
  url?: string; // ""
  related?: string; // "uk"
  stage?: string; // "F"
  valueType?: string; // "UK"
  shortName?: string; // ""
  worldSnookerId?: string; // "0"
  rankingType?: string; // "WR"
  eventPredictionID?: string; // "0"
  team?: string; // "0"
  format?: string; // "1"
  twitter?: string; // ""
  hashTag?: string; // "UKChampionship"
  conversionRate?: string; // "1.0000"
  allRoundsAdded?: string; // "0"
  photoURLs?: string; // ""
  numCompetitors?: string; // "0"
  numUpcoming?: string; // "0"
  numActive?: string; // "0"
  numResults?: string; // "0"
  note?: string; // ""
  commonNote?: string; // ""
  defendingChampion?: string; // "224"
  previousEdition?: string; // "857"
  countryCode?: string; // "XE"
}

export interface IRound {
  round?: string; // "15"
  name?: string; // "Final"
  numMatches?: string; // "1"
  numLeft?: string; // "2"
  distance?: string; // "10"
  looserMoney?: string; // "80,000"
  winnerMoney?: string; // "200,000"
  currency?: string; // "GBP"
  data?: IMatch[];
}

export interface IMatch {
  recId: string; // "6252207"
  worldSnookerId?: string; // "797086"
  round?: string; // "15"
  roundText?: string; // "Final"
  scheduledDate?: string; // "2020-12-06 19:00:00"
  endDate?: string; // "0000-00-00 00:00:00"
  modDate?: string; // "2020-12-06 16:24:59"
  note?: string; // "Referee: <a href=\"https://twitter.com/BelgianProRef1\">Olivier Marteel<br/><br/>In frame 7 Neil Robertson equals Hendry and O&rsquo;Sullivan&rsquo;s record of 12 century breaks in a single UK Championship "
  onBreak?: string; // "1"
  unfinised?: string; // "1"
  players?: IPlayer[];
}

export interface IPlayer {
  id?: string; // "12"
  name?: string; // "Judd Trump"
  score?: string; // "6"
  rank?: string; // "1"
  country?: string; // "England"
  countryCode?: string; // "XE"
  born?: string; // "20 Aug 1989"
  pro?: string; // "2005"
  photoURL?: string; // "http://35coders.com/common/snooker/img/judd-trump.jpg"
}

export interface IPlayerLatestMatches {
  status?: string;
  games: ILatestEvents[];
}

export interface ILatestEvents {
  eventID: string; // "1043"
  eventName: string; // "World Grand Prix"
  scheduledYear?: string; // "2020"
  scheduledDate?: string; // "2020-12-20 19:00:00"
  data: ILatestMatches[];
}

export interface ILatestMatches {
  round: string; // "15"
  roundText: string; // "Final"
  roundShort: string; // "F"
  ownerScore: string; // "10"
  playerScore: string; // "7"
  // buradan asagisi PVP'de yok
  playerId?: string; // "85"
  playerName?: string; // "Jack Lisowski"
  playerRank?: string; // "14"
  playerCountryCode?: string; // "XE"
  playerPhotoURL?: string; // "http://35Coders.com/common/snooker/img/jack-lisowski.jpg"
}
