
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, Card, Badge } from 'react-native-paper';

const MOCK_STREAMS = [
  {
    id: '1',
    hostName: 'María García',
    productName: 'iPhone 15 Pro',
    viewers: 1234,
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    hostName: 'Juan Pérez',
    productName: 'Nike Air Max',
    viewers: 856,
    thumbnail: 'https://via.placeholder.com/300x200',
  },
  {
    id: '3',
    hostName: 'Ana López',
    productName: 'MacBook Pro M3',
    viewers: 2104,
    thumbnail: 'https://via.placeholder.com/300x200',
  },
];

const HomeScreen = ({ navigation }) => {
  const renderStream = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('LiveViewer', { streamId: item.id })}
      style={styles.streamCard}>
      <Card>
        <Card.Cover source={{ uri: item.thumbnail }} />
        <Card.Content style={styles.cardContent}>
          <View style={styles.liveIndicator}>
            <Badge style={styles.liveBadge}>🔴 LIVE</Badge>
            <Text style={styles.viewers}>👁 {item.viewers}</Text>
          </View>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.hostName}>por {item.hostName}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🔥 En Vivo Ahora</Text>
      </View>
      <FlatList
        data={MOCK_STREAMS}
        renderItem={renderStream}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    padding: 10,
  },
  streamCard: {
    marginBottom: 15,
  },
  cardContent: {
    paddingTop: 10,
  },
  liveIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  liveBadge: {
    backgroundColor: '#ff0000',
    color: '#fff',
  },
  viewers: {
    fontSize: 14,
    color: '#666',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hostName: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;