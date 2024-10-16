//Aplicaciones Moviles B192
//Parcial Practico Corte 2
//Juan Esteban Ruiz Garcia

import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Map from './components/Map';
import Panel from './components/Panel';
import Modal from './components/Modal';
import Input from './components/Input';
import List from './components/List';

export default function App() {
  // Estados principales utilizados en la aplicación
  const [puntos, setPuntos] = useState([]); // Lista de puntos almacenados
  const [puntoTemp, setPuntoTemp] = useState({}); // Punto temporal para ser agregado
  const [nombre, setNombre] = useState(''); // Nombre del punto a agregar
  const [visibilityFilter, setVisibilityFilter] = useState('new_puntos'); // Controla qué contenido mostrar en el modal
  const [visibility, setVisibility] = useState(false); // Controla la visibilidad del modal
  const [pointsFilter, setPointsFilter] = useState(true); // Mostrar u ocultar los puntos en el mapa

  // Alterna el estado del filtro de puntos para mostrar u ocultar los puntos en el mapa
  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  // Maneja el evento de pulsación larga en el mapa para capturar la coordenada y mostrar el modal
  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_puntos');
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  // Maneja el cambio de texto del input para almacenar el nombre del punto
  const handleChangeText = text => {
    setNombre(text);
  };

  // Maneja el envío del formulario para agregar un nuevo punto a la lista
  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre('');
  };

  // Controla la visualización de la lista de puntos en el modal
  const handleLista = () => {
    setVisibilityFilter('all_puntos');
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map onlongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Panel onPressLeft={handleLista} textLeft="Lista" togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_puntos' 
        ?
          <View style={styles.form}>
            <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
            <Button title='Aceptar' onPress={handleSubmit} />
          </View>
        : 
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        }
      </Modal>
    </View>
  );
}

// Estilos de la App
const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

