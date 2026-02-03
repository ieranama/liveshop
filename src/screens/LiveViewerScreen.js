import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, TextInput, IconButton } from 'react-native-paper';

const LiveViewerScreen = ({ route, navigation }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, user: 'Juan', text: '¡Hola a todos!' },
    { id: 2, user: 'María', text: '¿Cuánto cuesta?' },
    { id: 3, user: 'Pedro', text: 'Se ve genial 🔥' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { 
        id: Date.now(), 
        user: 'Tú', 
        text: message 
      }]);
      setMessage('');
    }
  };

  const handleBuyNow = () => {
    // TODO: Implementar lógica de compra
    alert('Función de compra - Por implementar con Stripe');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <IconButton 
          icon="arrow-left" 
          onPress={() => navigation.goBack()}
          iconColor="#fff"
        />
        <View style={styles.headerInfo}>
          <Text style={styles.hostName}>María García</Text>
          <Text style={styles.viewers}>👁 1,234 espectadores</Text>
        </View>
      </View>

      {/* Video placeholder */}
      <View style={styles.videoContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/400x600' }}
          style={styles.video}
          resizeMode="cover"
        />
        <View style={styles.liveIndicator}>
          <Text style={styles.liveText}>🔴 LIVE</Text>
        </View>
      </View>

      {/* Product info overlay */}
      <View style={styles.productOverlay}>
        <View style={styles.productInfo}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>iPhone 15 Pro Max</Text>
            <Text style={styles.productPrice}>1.299€</Text>
          </View>
        </View>
        <Button 
          mode="contained" 
          onPress={handleBuyNow}
          style={styles.buyButton}
          buttonColor="#ff4081">
          Comprar Ahora
        </Button>
      </View>

      {/* Chat */}
      <View style={styles.chatContainer}>
        <ScrollView style={styles.chatMessages}>
          {messages.map(msg => (
            <View key={msg.id} style={styles.chatMessage}>
              <Text style={styles.chatUser}>{msg.user}: </Text>
              <Text style={styles.chatText}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
        
        <View style={styles.chatInput}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Escribe un mensaje..."
            mode="outlined"
            style={styles.input}
            dense
          />
          <IconButton 
            icon="send" 
            onPress={handleSendMessage}
            mode="contained"
            iconColor="#6200ee"
          />
        </View>
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
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  headerInfo: {
    flex: 1,
  },
  hostName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewers: {
    color: '#fff',
    fontSize: 12,
  },
  videoContainer: {
    flex: 1,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  liveIndicator: {
    position: 'absolute',
    top: 60,
    left: 10,
    backgroundColor: '#ff0000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  liveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  productOverlay: {
    position: 'absolute',
    bottom: 200,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  productInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 24,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  buyButton: {
    paddingVertical: 5,
  },
  chatContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  chatMessages: {
    flex: 1,
    padding: 10,
  },
  chatMessage: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  chatUser: {
    color: '#fff',
    fontWeight: 'bold',
  },
  chatText: {
    color: '#fff',
    flex: 1,
  },
  chatInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 5,
  },
});

export default LiveViewerScreen;