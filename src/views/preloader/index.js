import React from 'react'
import { StyleSheet, View } from "react-native";
import { Logo } from "@components"

export default function() {
  return (
    <View style={styles.wrapper}>
      <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper :{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#5B4B8A',
        fontFamily:"openSansRegular"
    }
})