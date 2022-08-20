import theme from '@src/theme';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function ({ image }) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={image} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    height: 160,
    justifyContent:'flex-start',
    alignItems: 'flex-start',
  },
  image :{
      width: 130,
      height: 130,
      borderColor: theme.gray,
  }
});
