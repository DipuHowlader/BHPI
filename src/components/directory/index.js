import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Box from './box';
import theme from '@src/theme';

const Directory = ({ menu, navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.flexbox} showsVerticalScrollIndicator={false}>
        {menu.map((element) => {
          return (
            <TouchableOpacity
              key={element.id}
              style={styles.button}
              onPress={() => {
                if (element.id === -1) {
                  navigation.navigate('Teacher');
                }
              }}
            >
              <Box title={element.title} icon={element.icon} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '40%',
    Height: 130,
    backgroundColor: theme.secondaryColor,
    paddingHorizontal: 22,
    paddingVertical: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    shadowOffset: { width: 7, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    fontFamily: 'RobotoLight',
    shadowColor: '#fdf0f080',
    elevation: 15,
  },
  wrapper: {
    top: 50,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flex: 1,
  },
  flexbox: {
    flexDirection: 'row',
    paddingBottom: 50,
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default Directory;
