import React from 'react';
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native';
import theme from '@src/theme';
import data from '@src/constants/notice';
import Notice from './notice';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function () {
  const Image = require('@assets/images/colleage_notice.jpg');
  return (
    <>
      <View style={styles.father}>
        <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
          <View style={styles.layer}></View>
          <Ionicons style={{color:'#fff',  zIndex: 999}} name="notifications" size={50} />
          <Text style={styles.title}>No New Notification</Text>
          <Text style={styles.desc}>
            Yor're caught up! check back for Notification campus alerts, and more
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.separotor}></View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((element) => (
          <Notice
            key={element.id}
            title={element.title}
            flairIcon={element.flair.icon}
            flair={element.flair.title}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  layer: {
    width: '100%',
    height: '100%',
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position:'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  father: {
    height: '30%',
    
  },
  title: {
    fontSize: theme.big,
    color: theme.white,
    textAlign: 'center',
    marginBottom: 14,
    fontFamily: 'RobotoMedium',
    zIndex: 999,
  },
  desc: {
    color: theme.white,
    fontSize: theme.small,
    textAlign: 'center',
    fontFamily: 'RobotoLight',
    lineHeight: 28,
    zIndex: 999,
    paddingHorizontal: 15,
  },
  separotor: {
    marginHorizontal: 8,
    borderBottomColor: theme.separotor,
    borderBottomWidth: 1,
  },
});
