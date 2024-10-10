import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import Map from './components/Map';
import Panel from './components/Panel';
import Modal from './components/Modal';
import Input from './components/Input';
import List from './components/List';

export default function App() {
  // Definición de los estados
  const [puntos, setPuntos] = useState([]); // Lista de puntos
  const [puntoTemp, setPuntoTemp] = useState({}); // Punto temporal
  const [nombre, setNombre] = useState(''); // Nombre del punto
  const [visibilityFilter, setVisibilityFilter] = useState('new_puntos'); // Filtro de visibilidad (tiene dos valores: 'new_puntos', 'all_puntos')
  const [visibility, setVisibility] = useState(false); // Visibilidad del modal
  const [pointsFilter, setPointsFilter] = useState(true); // Estado del filtro de puntos

  // Función para alternar el filtro de puntos
  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  // Función que maneja el evento onLongPress del mapa
  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_puntos')
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  // Función que maneja el cambio de texto en el input
  const handleChangeText = text => {
    setNombre(text);
  };

  // Función que maneja el envío del formulario
  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre('');
  };

  // Función que maneja la visualización de la lista de puntos
  const handleLista = () => {
    setVisibilityFilter('all_puntos');
    setVisibility(true);
  };

  console.log(puntos);

  return (
    <View style={styles.container}>
      {/* Componente del mapa */}
      <Map onlongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />

      {/* Componente del panel con botones */}
      <Panel onPressLeft={handleLista} textLeft="Lista" togglePointsFilter={togglePointsFilter} />

      {/* Componente del modal */}
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_puntos' 
        ?
          // Formulario para agregar un nuevo punto
          <View style={styles.form}>
            <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
            <Button title="Aceptar" onPress={handleSubmit} />
          </View>
        : 
          // Lista de puntos
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        }
      </Modal>
    </View>
  );
}

// Estilos del componente App
const styles = StyleSheet.create({
  form: {
    padding:15,
  },
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: '#fff', // Color de fondo blanco
    alignItems: 'center', // Alineación horizontal centrada
    justifyContent: 'flex-start', // Alineación vertical al inicio
  },
});
