import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Muestra el mapa y los puntos marcados en él
export default ({ onlongPress, puntos, pointsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={onlongPress}>
      {pointsFilter && puntos.map(x => (
        <Marker
          key={x.name}
          coordinate={x.coordinate}
          title={x.name}
        />
      ))}
    </MapView>
  );
};

// Estilos del Map
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
