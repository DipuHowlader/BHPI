import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import data from '@src/constants/teachers.json';
import theme from '@src/theme';
import Teacher from './teacher'

export default function Home() {

  return (
    <SafeAreaView style={styles.wrapper}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal={false}
          numColumns={1}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (<Teacher item={item}  />)
          }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
  },
  list: {
    paddingBottom: 5,
    backgroundColor:"#E6E6E6",
  },
});
