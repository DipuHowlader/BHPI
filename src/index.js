import React from 'react';
import { UIManager, Platform, View } from 'react-native';
import Router from '@src/router';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const IsAndroid = Platform.OS === 'android';

if (IsAndroid) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = ({ showLoading, asyncJob, onFinish }) => {
  if (showLoading) {
    return <AppLoading startAsync={asyncJob} onFinish={onFinish} onError={console.warn} />;
  }

  const [loaded] = useFonts({
    openSansLight: require('@assets/fonts/OpenSans-Light.ttf'),
    openSansRegular: require('@assets/fonts/OpenSans-Regular.ttf'),
    openSansMedium: require('@assets/fonts/OpenSans-Medium.ttf'),
    openSansRegular: require('@assets/fonts/OpenSans-Regular.ttf'),
    RobotoRegular: require('@assets/fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('@assets/fonts/Roboto-Medium.ttf'),
    RobotoLight: require('@assets/fonts/Roboto-Light.ttf'),
  });

  if (!loaded) return null;
  return <Router />;
};

export default App;
