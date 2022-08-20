import theme from '@src/theme';
import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

export default function ({ image, title }) {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={image} />
      <Text style={Styles.title}>{title}</Text>
      <Pressable style={Styles.button}>
        <Text style={Styles.buttonText}>Read more...</Text>
      </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#F6F6F6',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius: 5,
    width: 250,
    Maxheight: 400,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
    borderColor: theme.gray,
  },

  title: {
    color: theme.black,
    fontFamily: 'RobotoRegular',
    textAlign: 'center',
    fontSize: theme.small,
    textTransform: 'capitalize',
    marginTop: 5,
  },

  button: {
    width:150,
    height: 40,
    borderRadius:3,
    backgroundColor : theme.btncolor,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 13,
    marginBottom: 20,

  },
  buttonText:{
    textAlign: "center",
    fontSize:theme.xsmall,
    color: theme.white,
    fontFamily: "RobotoLight",
  }
});
