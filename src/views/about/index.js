import React from "react";
import { StyleSheet, View, Text, ImageBackground, Pressable, SafeAreaView, StatusBar } from "react-native";
import theme from "@src/theme";


const Image = require("@assets/images/colleage.jpg");

export default function () {
  return (
    <SafeAreaView style={Styles.container}>
      <ImageBackground
        source={Image}
        resizeMode="cover"
        style={Styles.image}
      >
          <View style={Styles.layer}></View>
      </ImageBackground>
      <View style={Styles.content}>
        <Text style={Styles.title}>
          BHPI Mobile ID
        </Text>
        <Text style={Styles.text}>
          Welcome to Bhola Polytechnic Institute Mobile,
          the mobile app servers as an extension of your physical stanford identification

        </Text>
        <Pressable style={Styles.button}>
            <Text style={Styles.buttonText}>Login with Your Colleage ID</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: theme.black
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    position: "absolute",    
    bottom: 100,
    left: 20,
    right:30,
  },
  layer:{
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  title: {
    fontSize: theme.title,
    fontFamily: "openSansMedium",
    color: "#fff",
    marginBottom:25,
  },
  text: {
    fontSize: theme.medium,
    fontFamily: "openSansLight",
    color: theme.white,
    lineHeight:22,
  },
  button: {
    height: 40,
    width:250,
    borderRadius:3,
    backgroundColor : "red",
    marginTop :20,
    elevation:30,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText:{
    textAlign: "center",
    fontSize:16,
    color: "#fff",
    fontFamily: "RobotoLight",
  }
});
