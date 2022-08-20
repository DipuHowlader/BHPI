import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import data from '@src/constants/help.json';
import HelpBox from './helpbox';
import Icons from '@src/assets/icons/helpbox';
import theme from '@src/theme';

export default function () {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.flexbox}>
        <Text style={Styles.title}>Help</Text>
        <Text style={Styles.all}>see all</Text>
      </View>
      <FlatList
        data={data}
        renderItem={(item) => <HelpBox key={item.item.id} image={Icons[item.item.Image]} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  flexbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  title: {
    fontFamily: 'openSansMedium',
    fontSize: theme.mediumxl,
  },
  all: {
    fontFamily: 'openSansMedium',
    fontSize: theme.medium,
    color: theme.secondaryColor,
  },
});
