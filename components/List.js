import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

// List recibe puntos y una función para cerrar el modal
export default ({ puntos, closeModal }) => {
  console.log('Puntos en List:', puntos);
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map(x => x.name)}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

// Estilos de la List
const styles = StyleSheet.create({
  button: {
    paddingBottom: 15,
  },
  list: {
    height: Dimensions.get('window').height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 15,
  },
});

