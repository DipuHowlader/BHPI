import React from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import theme from '@src/theme';
import { NoticeContainer } from '@components';


export default function () {
  return (
    <SafeAreaView style={Styles.safecontainer}>
        <NoticeContainer />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

 
  content: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    textAlign: 'center',
    color: theme.white,
    fontSize: theme.big,
    fontFamily: 'openSansRegular',
  },
});
