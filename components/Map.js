import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Componente Map
// Recibe tres props: onlongPress, puntos y pointsFilter
export default ({ onlongPress, puntos, pointsFilter }) => {
  return (
    // Vista del mapa principal
    <MapView
      style={styles.map}
      onLongPress={onlongPress} // Llama a la función onlongPress cuando se hace una pulsación larga en el mapa
    >
      {/* Muestra los marcadores si pointsFilter es verdadero */}
      {pointsFilter && puntos.map(x => 
          <Marker
            key={x.name} // Clave única para cada marcador
            coordinate={x.coordinate} // Coordenadas del marcador
            title={x.name} // Título que se mostrará en el marcador
          />
        )}
    </MapView>
  );
};

// Estilos del componente Map
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width - 150, // Ancho del mapa, resta 150 unidades al ancho total de la ventana
    height: Dimensions.get('window').height, // Alto del mapa igual al alto de la ventana
  },
});