import React from 'react';
import {KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../Utils/colors';
export const CustomTabBar = ({state, navigation}) => {
  return (
    <KeyboardAvoidingView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.tertiary,
          height: 90,
          alignItems: 'baseline',
        }}>
        {state.routes.map((route, index) => {
          let icon = '';
          switch (route.name) {
            case 'Home':
              icon = 'storefront-outline';
              break;
            case 'Profile':
              icon = 'person-outline';
              break;
            case 'MyCart':
              icon = 'bag-handle-outline';
              break;
            default:
              break;
          }
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
              }}>
              <Ionicons
                name={icon}
                size={24}
                color={isFocused ? colors.primary : '#ccc'}
              />
              <Text style={{color: isFocused ? colors.primary : '#ccc'}}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </KeyboardAvoidingView>
  );
};
