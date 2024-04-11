import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../Utils/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const IconButton = ({title}) => {
  return (
    <View style={styles.InputContainerComponent}>

      <Icon
        name={title}
        size={23}
        color={'#272727'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    InputContainerComponent: {
        flexDirection: 'row',
         marginTop: 20,
        borderRadius: 10,
        backgroundColor: colors.fifth,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.12,
        height: height * 0.06,
    },
        TextInputContainer: {
        width: '80%',
        height: height * 0.08,
        fontSize: 16,
        color: colors.secondary,
        alignItems: 'center',
    },
})

export default IconButton;