import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// Input que recibe un título y otras props adicionales
export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  );
};

// Estilos del Input
const styles = StyleSheet.create({
  wrapper: {
    height: 40,
  },
});
