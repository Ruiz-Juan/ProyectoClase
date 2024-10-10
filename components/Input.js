import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// Componente Input
// Recibe un título y otras props adicionales
export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      {/* Etiqueta del input */}
      <Text>{title}</Text>
      {/* Campo de entrada de texto */}
      <TextInput {...rest} />
    </View>
  );
};

// Estilos del componente Input
const styles = StyleSheet.create({
  wrapper: {
    height: 40, // Altura del contenedor del input
  },
});