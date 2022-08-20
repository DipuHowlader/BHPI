import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import { monthString, day, weekday, greet } from '@src/utils/todayInfo';
import { Directory, SearchApp } from '@components';
import data from '@src/constants/menu.json';
import axios from 'axios';
import CONFIG from '@src/config';

const Image = require('@assets/images/colleage5.jpg');

export default function Home({navigation}) {
  const [menu, setmenu] = useState([...data]);
  const [temp, settemp] = useState([]);
  const lat = '22.679501'
  const lon = '90.643913'
  const key = 'a5e9f191d87ab136db6e5c44fe28b8d5'


  React.useEffect(() => {
    async function fetchApi (){
      await axios.get(`${CONFIG.http.weatherApi}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`).then((response) => {
        settemp([response.data])
      })
    }
    fetchApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
          <View style={styles.layer}></View>
          <View style={styles.content}>
            <Text style={styles.date}>{weekday + ', ' + monthString + '  ' + day}</Text>
            <Text style={styles.time}>{greet} !!</Text>
            {temp[0] && <Text style={styles.weather}>
               It's currently {Math.ceil(temp[0].main.temp - 273.15)} &deg;C at {'\n'} Bhola, with a high of {Math.ceil(temp[0].main.feels_like - 273.15)} &deg;C today
            </Text>}
          </View>
        </ImageBackground>
        <SearchApp setmenu={setmenu} />
      </View>
      <Directory menu={menu} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  top: {
    width: '100%',
    height: '40%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  layer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  content: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    right: 20,
  },
  date: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'RobotoLight',
    marginBottom: 10,
  },
  time: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'openSansRegular',
    marginBottom: 10,
  },
  weather: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'RobotoLight',
    lineHeight: 28,
  },
});
