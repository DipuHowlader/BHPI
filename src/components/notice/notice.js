import React from "react";
import { StyleSheet, View, Text } from "react-native";
import theme from "@src/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ({ title, flair, flairIcon }) {
  return (
    <View style={styles.notice}>
      <View style={styles.flair}>
        <Ionicons name={flairIcon} size={15} color={theme.LightRed} />
        <Text style={styles.flairText}>{flair}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>35 days ago</Text>
      <View style={styles.separotor}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  notice: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: theme.black,
    color: theme.black,
    fontSize: theme.mediumL,
    marginTop: 5,
    maxWidth: 240,
    lineHeight: 28,
    fontFamily: "openSansMedium",
    textTransform: "capitalize",
  },

  separotor: {
    paddingTop: 15,
    borderBottomColor: theme.separotor,
    borderBottomWidth: 1,
  },
  time: {
    paddingTop: 8,
    color: theme.gray,
    fontSize: theme.xsmall,
    fontFamily: "openSansLight",
  },

  flairIcon: {
    marginHorizontal: 2,
    fontSize: theme.xsmall,
    fontFamily: "openSansLight",
  },

  flair: {
    marginVertical: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  flairText: {
    color: theme.LightRed,
    fontSize: theme.xsmall,
    fontFamily: "openSansLight",
    marginLeft:4,
  }
});
