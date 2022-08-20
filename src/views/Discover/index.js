import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Help from './help';
import Event from './event';
import ExplorMore from './more'
import { Header } from '@components'
import theme from '@src/theme';

export default function () {
  return (
    <SafeAreaView style={Styles.safecontainer}>
      <ScrollView 
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      stlyle={{flex: 1,backgroundColor: theme.white,}}>
        <Header title='Explore' />
        <Event />
        <ExplorMore />
        <Help />
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: theme.white,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontFamily: 'openSansMedium',
    fontSize: theme.biggest,
    marginLeft: 20,
  },
});
