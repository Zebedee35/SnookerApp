# SnookerApp - React Native App

## Description

Hello, This project is both a TypeScript exercise and a useful application. If you like Snooker like me or want to gain experience in TypeScript, let's develop the application together.

The main screens are as follows.
<img src="imgGitHub/MainScreens.png">

### ToDo List
- [x] Home Screen
- [x] Live Score Screen
- [x] Rankings Screen
- [x] Seasons Screen 
- [x] Settings Screen
- [ ] Adding country flags 
- [ ] Animation for 'Live' text
- [ ] Dark Theme
- [ ] Hide TBD Matches
- [ ] Player Detail Modal Page
- [ ] Player vs Player Modal Page
- [ ] Tournament selection from the session list
- [ ] Selection of previous seasons
- [ ] Notification Settings

### API Documentation
Please note that: The Test API brings limited content. Because this API is for development.

*baseURL:* http://35coders.com/index.php/testapi

- FUNCTION: `tournament`

fullURL: http://35coders.com/index.php/testapi/tournament 

This request returns the currently active tournament information. The event key contains general information about the tournament. The rounds key lists all matches of the tournament linked to rounds. _TestAPI only brings the UK Championship tournament information._


- FUNCTION: `ranks`

fullURL: http://35coders.com/index.php/testapi/ranks 

This request lists the players' scores and positions in the tournament. _TestAPI fetches real ranking information._

## Installation

Run yarn to install required packages.
