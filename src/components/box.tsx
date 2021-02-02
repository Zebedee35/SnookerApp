import React, { FC } from 'react'
import { View } from 'react-native'


type TBoxProps = React.ComponentProps<typeof View> & {

}

const Box: FC<TBoxProps> = props => {
  return (
    <View {...props} >

    </View>
  )
}

export default Box;