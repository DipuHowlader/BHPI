import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';
import theme from '@src/theme';

export default function ({ item }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        clickEventListener(item);
      }}
    >
      <Image style={styles.userImage} source={{ uri: item.image }} />
      <View style={styles.cardFooter}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.position}>{item.position}</Text>
          <Text style={styles.technology}>{item.technology}</Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>More..</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
      /******** card **************/
      card:{
        shadowColor: '#00000021',
        paddingTop:15,
        marginHorizontal:15,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    
        margin: 5,
        backgroundColor:"white",
        paddingHorizontal: 20,
      },
      cardFooter: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        paddingVertical: 15,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems:"center", 
        justifyContent:"center"
      },
      cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
      },
      userImage:{
        height: 120,
        width: 120,
        borderRadius:60,
        alignSelf:'center',
        borderColor:"#DCDCDC",
        borderWidth:3,
      },
      name:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#008080",
        fontWeight:'bold',
        textAlign:'center',
      },
      position:{
        fontSize:14,
        flex:1,
        paddingVertical: 5,
        alignSelf:'center',
        color:"#696969",
        textAlign:'center',
      },
    
      technology:{
        fontSize:14,
        flex:1,
        alignSelf:'center',
        color:"#696969",
        textAlign:'center',
      },
      followButton: {
        marginTop:10,
        height:35,
        width:100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "#D61C4E",
      },
      followButtonText:{
        color: "#FFFFFF",
        fontSize:theme.small,
      },
      icon:{
        height: 20,
        width: 20, 
      }
});
