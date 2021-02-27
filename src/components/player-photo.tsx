import React, {FC} from 'react';
import {StyleSheet, Image, StyleProp, ImageStyle} from 'react-native';
import Box from './box';

const styles = StyleSheet.create({
  default: {
    borderRadius: 999,
  },
});

type TPlayerPhotoProps = {
  imgUri?: string;
  style?: StyleProp<ImageStyle>;
};

const PlayerPhoto: FC<TPlayerPhotoProps> = ({style, imgUri}) => {
  return (
    <Box>
      {!imgUri || imgUri === '' ? (
        <Image
          source={{uri: 'http://35Coders.com/common/snooker/img/snooker@2x.png'}}
          style={[styles.default, style]}
        />
      ) : (
        <Image source={{uri: `${imgUri}`}} style={[styles.default, style]} />
      )}
    </Box>
  );
};

export default PlayerPhoto;
