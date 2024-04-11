import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../Utils/colors';

const TodaySaller = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today Saller</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:colors.sixth
  },
});

export default TodaySaller;
