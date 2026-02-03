import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';

const BroadcastScreen = ({ navigation }) => {
  const [isLive, setIsLive] = useState(false);
  const [viewers, setViewers] = useState(0);

  const startLive = () => {
    // TODO: Implementar lógica de transmisión con Agora
    setIsLive(true);
    // Simular incremento de viewers
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    return () => clearInterval(interval);
  };

  const endLive = () => {
    setIsLive(false);
    setViewers(0);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <IconButton 
          icon="close" 
          onPress={() => navigation.goBack()}
          iconColor="#fff"
        />
        {isLive && (
          <View style={styles.liveIndicator}>
            <Text style={styles.liveText}>🔴 EN VIVO</Text>
            <Text style={styles.viewers}>👁 {viewers}</Text>
          </View>
        )}
      </View>

      {/* Camera preview placeholder */}
      <View style={styles.cameraContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/400x600' }}
          style={styles.camera}
          resizeMode="cover"
        />
        {!isLive && (
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Vista previa de cámara</Text>
          </View>
        )}
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        {!isLive ? (
          <View style={styles.previewControls}>
            <Text style={styles.instructionText}>
              📱 Asegúrate de tener buena luz y conexión
            </Text>
            <Button 
              mode="contained" 
              onPress={startLive}
              style={styles.startButton}
              buttonColor="#ff0000"
              icon="video">
              Iniciar Transmisión
            </Button>
          </View>
        ) : (
          <View style={styles.liveControls}>
            <View style={styles.productCard}>
              <Text style={styles.productLabel}>Producto en venta:</Text>
              <Text style={styles.productName}>iPhone 15 Pro Max</Text>
              <Text style={styles.productPrice}>1.299€</Text>
            </View>
            
            <View style={styles.actionButtons}>
              <IconButton 
                icon="camera-flip" 
                size={30}
                iconColor="#fff"
                style={styles.iconButton}
                onPress={() => console.log('Cambiar cámara')}
              />
              <IconButton 
                icon="microphone" 
                size={30}
                iconColor="#fff"
                style={styles.iconButton}
                onPress={() => console.log('Toggle micrófono')}
              />
            </View>

            <Button 
              mode="contained" 
              onPress={endLive}
              style={styles.endButton}
              buttonColor="#d32f2f"
              icon="stop">
              Finalizar Transmisión
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 10,
  },
  viewers: {
    color: '#fff',
    fontSize: 14,
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlayText: {
    color: '#fff',
    fontSize: 18,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  previewControls: {
    alignItems: 'center',
  },
  instructionText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  startButton: {
    width: '100%',
    paddingVertical: 8,
  },
  liveControls: {
    alignItems: 'center',
  },
  productCard: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  productLabel: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },
  productName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    color: '#4caf50',
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 5,
  },
  endButton: {
    width: '100%',
    paddingVertical: 8,
  },
});

export default BroadcastScreen;