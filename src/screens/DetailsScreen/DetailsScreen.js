import React from 'react';
import { Button, Text, View } from 'react-native';
export const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Profile"
      onPress={() => navigation.navigate('Profile')}
    />
  </View>
);
