import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

// Panel que Muestra/Oculta los puntos 
export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} />
    </View>
  );
};

// Estilos del Panel
const styles = StyleSheet.create({
  panel: {
    Flex: 1, 
    flexDirection: 'row', 
    backgroundColor: '#eee', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});
