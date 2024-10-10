import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

// Componente Panel
// Recibe tres props: onPressLeft, textLeft y togglePointsFilter
export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    // Contenedor principal del panel
    <View style={styles.panel}>
      {/* Botón que ejecuta la función onPressLeft al ser presionado */}
      <Button onPress={onPressLeft} title={textLeft} />
      {/* Botón para mostrar u ocultar elementos, ejecuta togglePointsFilter */}
      <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} />
    </View>
  );
};

// Estilos del componente Panel
const styles = StyleSheet.create({
  panel: {
    flex: 1, // Ocupa todo el espacio disponible
    flexDirection: 'row', // Los elementos se disponen en fila
    backgroundColor: '#eee', // Color de fondo gris claro
    justifyContent: 'center', // Alineación horizontal centrada
    alignItems: 'center', // Alineación vertical centrada
  },
});