import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import theme from '@src/theme';

export default function({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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