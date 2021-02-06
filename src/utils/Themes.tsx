import React from 'react'

export type Theme = {
  text: string,
  bgColor: string,
  textOposite: string,
  listHeaderBG: string,
  listBG: string,
  score: string,
  live: string,
  detail: string,
  tabBar: string,
  modalWindow: string,
  modalTransparentBackground: string;
  tabBarTransparentBG: string,
}

export type Themes = {
  dark: Theme;
  light: Theme;
};

export const themes: Themes = {
  dark: {
    text: '#DFE2E7',
    detail: '#53616D',
    bgColor: '#1F2024',
    listHeaderBG: '#242D34',
    listBG: '#20272D',
    live: '#B3120D',
    score: '#1EA8F4',
    tabBar: '#64AC1E',
    modalWindow: '#20272D',
    modalTransparentBackground: 'rgba(0, 0, 0, 0.7)',
    tabBarTransparentBG: 'rgba(255, 255, 255, 0.3)',

    textOposite: '#000000',
  },
  light: {
    text: '#000000',
    detail: '#9c9c9c',
    bgColor: '#FFFFFF',
    listHeaderBG: '#DFE2E7',
    listBG: '#FFFFFF',
    live: '#96120D',
    score: '#64AC1E',
    tabBar: '#64AC1E',
    modalWindow: '#FFFFFF',
    modalTransparentBackground: 'rgba(0, 0, 0, 0.7)',
    tabBarTransparentBG: 'rgba(0, 0, 0, 0.7)',

    textOposite: '#FFFFFF',
  },
};

export const ThemeContext = React.createContext(themes['light'])