import { RouteProp, StackNavigationState } from '@react-navigation/native'


type RootStackParamList = {
  Home: undefined;
  Live: undefined;
  Rankings: undefined;
  Seasons: undefined;
  Settings: undefined;
}

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type HomeProps = {
  route: HomeScreenRouteProp,
  navigation: HomeScreenNavigationProp
}

export { HomeProps }