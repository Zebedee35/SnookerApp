import { RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'


type RootStackParamList = {
  Home: undefined;
  Live: undefined;
  Rankings: undefined;
  Seasons: undefined;
  Settings: undefined;
}

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>
type HomeScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Home'>

type HomeProps = {
  route: HomeScreenRouteProp,
  navigation: HomeScreenNavigationProp
}

export { HomeProps }