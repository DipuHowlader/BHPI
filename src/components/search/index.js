import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import theme from '@src/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '@src/constants/menu.json';

export default function ({ setmenu }) {
  const handelInput = (value) => {
    if (value !== '') {
      const results = [
        data.filter(item => {
          return item.title.toLowerCase().startsWith(value.toLowerCase());
        }),
      ];
      setmenu(...results);
    } else {
      setmenu(data);
    }
  };

  return (
    <View style={styles.box}>
      <Ionicons style={styles.icon} name="search-outline" size={25} />
      <TextInput
        style={styles.input}
        onChangeText={handelInput}
        placeholder="Search App"
        // keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: -23,
    Width: 300,
    backgroundColor: theme.white,
    elevation: 5,
    alignItems: 'center',
    borderRadius: 5,
    left: 30,
    right: 30,
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    height: 45,
    width: '100%',
    paddingRight: 15,
    fontFamily: 'RobotoLight',
    // outlineStyle: 'none',
  },
});
