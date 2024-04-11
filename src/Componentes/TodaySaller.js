import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../Utils/colors';

const TodaySaller = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', flexDirection: 'row', gap: 10}}>
        <Text style={styles.text}>Today Sale!</Text>
        <Text style={styles.textCount}> 04:43:23</Text>
      </View>
<TouchableOpacity>
      <Text style={styles.textSeeMore}>See more</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '95%',
    backgroundColor: '#f0f0f0',
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginLeft: 10,
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.sixth,
  },
  textCount: {
    fontSize: 15,
    color: colors.sixth,
    backgroundColor: 'rgba(255, 10, 0, 0.1)',
    borderRadius: 30,
    padding: 5,
    color: 'rgba(255, 0, 0, 1)',
    fontWeight: '400',
  },
  textSeeMore: {
    fontSize: 20,
    color: colors.sixth,
  },
});

export default TodaySaller;
