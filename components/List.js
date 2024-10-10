import React from 'react';
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from 'react-native';

// Componente List
// Recibe dos props: puntos y closeModal
export default ({ puntos, closeModal }) => {
  return (
    <>
      {/* Vista de la lista de puntos */}
      <View style={styles.list}>
        <FlatList
          data={puntos.map(x => x.name)} // Extrae los nombres de los puntos
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} // Renderiza cada elemento como un texto
          keyExtractor={item => item} // Establece el nombre como la clave única
        />
      </View>
      {/* Botón para cerrar el modal */}
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};

// Estilos del componente List
const styles = StyleSheet.create({
  button: {
    paddingBottom: 15, // Espaciado inferior
  },
  list: {
    height: Dimensions.get('window').height - 250, // Altura de la lista (ventana menos 250 unidades)
  },
  item: {
    borderBottomWidth: 1, // Borde inferior de cada elemento
    borderColor: '#ccc', // Color del borde inferior
    height: 50, // Altura de cada elemento
    justifyContent: 'center', // Alineación vertical centrada
    padding: 15, // Espaciado interior
  },
});