import React from 'react'
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Header } from '@components'
import theme from '@src/theme';
import Box from './box'

export default function({ data }) {
  return (
    <View style={styles.container}>
      <Header  />
      <FlatList
        data={data}
        renderItem = {item => <Box title={item.title} image= {item.image} />}
      
      />
         </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.white,
      paddingHorizontal: 20,
      height: 50,
      justifyContent: 'center',
    },
    title : {
      color: theme.black,
      fontFamily: 'openSansMedium',
      fontSize: theme.mediumxl
    }
  });