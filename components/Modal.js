import React from 'react';
import { StyleSheet, Dimensions, Modal, View, Text } from 'react-native';

// Componente Modal
// Recibe dos props: children y visibility
export default ({ children, visibility }) => {
  return (
    <Modal
      animationType="slide" // Tipo de animación al mostrar el modal
      transparent={true} // Hace que el fondo sea transparente
      visible={visibility} // Controla la visibilidad del modal
    >
      {/* Vista centrada para el contenido del modal */}
      <View style={styles.center}>
        <View style={styles.modalView}>
          {children} {/* Renderiza los hijos dentro del modal */}
        </View>
      </View>
    </Modal>
  );
};

// Estilos del componente Modal
const styles = StyleSheet.create({
  center: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: 'center', // Alineación vertical centrada
    alignItems: 'center', // Alineación horizontal centrada
    backgroundColor: 'rgba(0,0,0,0.3)', // Color de fondo con opacidad para el efecto de sombra
  },
  modalView: {
    minWidth: Dimensions.get('window').width - 100, // Ancho mínimo del modal (ventana menos 100 unidades)
    backgroundColor: '#fff', // Color de fondo blanco
    borderRadius: 4, // Bordes redondeados
    padding: 0, // Sin padding
    shadowColor: '#000', // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});