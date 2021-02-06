import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Easing } from 'react-native'

import Box from './box'
import Label from './label'
import consts from '../utils/Consts'
import { Theme, ThemeContext } from '../utils/Themes'
import { Clock, useCode, Value } from 'react-native-reanimated'


type TLiveProps = React.ComponentProps<typeof Box> & {
  bigSize?: boolean
}

const Live: FC<TLiveProps> = (props) => {
  // const {
  //   bigSize,
  //   ...restOfProps
  // } = props
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const [isVisible, setVisible] = useState(false)
  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme);

  // const liveAnim = () => {
  //   Animated.timing(fadeAnim, {
  //     toValue: isVisible ? 0 : 1,
  //     duration: 1000,
  //     easing: Easing.bezier(0.4, 0, 0.2, 1),
  //     useNativeDriver: false,
  //   }).start(() => {
  //     setVisible(!isVisible)
  //     console.log('aa')
  //     liveAnim()
  //   })
  // }

  // useEffect(() => {
  //   liveAnim()
  // }, [])

  return (
    <Box style={{
      ...styles.container,
      width: props.bigSize ? 100 : 65,
      height: props.bigSize ? 30 : 20
    }}>
      {props.bigSize
        ?
        <Box style={styles.circle} >
          {/* <Animated.View style={{
            opacity: fadeAnim
          }}> */}
          <Box style={styles.dot} >
          </Box>
          {/* </Animated.View> */}
        </Box>
        :
        // <Animated.View style={{
        //   opacity: fadeAnim
        // }}>
        <Box style={styles.dot} >
        </Box>
        // </Animated.View>
      }
      <Label style={props.bigSize ? styles.msLiveBig : styles.msLive}>LIVE</Label>
    </Box>
  )
}

export default Live;

const customStyles = (t: Theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msLive: {
    color: t.live,
    fontSize: consts.fontSizes.scoreListStatusSmall,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 0,
    marginLeft: 5
  },
  msLiveBig: {
    color: t.live,
    fontSize: consts.fontSizes.scoreListStatusBig,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 1,
    marginLeft: 5
  },
  circle: {
    height: consts.liveCircleSize,
    width: consts.liveCircleSize,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: t.live,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: consts.liveCircleDotSize,
    width: consts.liveCircleDotSize,
    borderRadius: 999,
    backgroundColor: t.live,
    alignItems: 'center',
    justifyContent: 'center',
  },
})