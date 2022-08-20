import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import data from '@src/constants/events.json';
import EventBox from './events';
import Icons from '@src/assets/icons/events';
import theme from '@src/theme';

export default function () {
  return (
    <View stylee={Styles.wrapper}>
      <View style={Styles.flexbox}>
        <Text style={Styles.title}>FEATURED- NEWS & EVENTS</Text>
        <Text style={Styles.all}>see all</Text>
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <EventBox
            key={item.id}
            title={item.item.title.split(' ').slice(0, 10).join(' ')}
            image={Icons[item.item.images[0]]}
          />
        )}
        horizontal
        keyExtractor={(item) => item.id}
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
    fontSize: theme.medium,
  },
  all: {
    fontFamily: 'openSansMedium',
    fontSize: theme.medium,
    color: theme.secondaryColor,
  },
});
