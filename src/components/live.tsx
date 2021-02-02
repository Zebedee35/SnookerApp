import React, { FC, useEffect, useRef, useState } from 'react'
import { Animated, StyleSheet, Easing } from 'react-native'

import Box from './box'
import Label from './label'
import xTheme from '../utils/xTheme'
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
      <Label style={props.bigSize ? styles.msLiveBig : styles.msLive}>live</Label>
    </Box>
  )
}

export default Live;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  msLive: {
    color: xTheme.colors.live,
    fontSize: xTheme.fontSizes.scoreListStatusSmall,
    textAlign: 'center',
    marginTop: 0,
    marginLeft: 5
  },
  msLiveBig: {
    color: xTheme.colors.live,
    fontSize: xTheme.fontSizes.scoreListStatusBig,
    textAlign: 'center',
    marginTop: 1,
    marginLeft: 5
  },
  circle: {
    height: xTheme.liveCircleSize,
    width: xTheme.liveCircleSize,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: xTheme.colors.live,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: xTheme.liveCircleDotSize,
    width: xTheme.liveCircleDotSize,
    borderRadius: 999,
    backgroundColor: xTheme.colors.live,
    alignItems: 'center',
    justifyContent: 'center',
  },
})