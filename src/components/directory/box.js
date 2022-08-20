import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from '@src/assets/icons/apps';
import theme from '@src/theme';

export default function ({ title, icon }) {
  let image = Icons[icon];
  return (
    <View style={Styles.box}>
      <Image style={{ width: 60, height: 60, resizeMode: 'contain' }} source={image} />
      <Text style={Styles.title}>{title}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  box:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.white,
    maxWidth: 200,
    marginTop: 8,
    textAlign: 'center',
    flexWrap: 'nowrap',
    lineHeight: 16,
    fontSize: theme.xsmall,
  },
});
