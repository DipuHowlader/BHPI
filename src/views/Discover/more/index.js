import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import data from '@src/constants/videos.json';
import More from './explore';
import theme from '@src/theme';

export default function () {
  return (
    <View style={Styles.wrapper}>
      <View style={Styles.flexbox}>
        <Text style={Styles.title}>Explore More</Text>
        <Text style={Styles.all}>see all</Text>
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={video => <More key={video.item.id} video={video.item} />}
        horizontal
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  wrapper :{
    flex: 1,
  },
  flexbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 30,
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
