import ScreenLayout from '../components/ScreenLayout';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, Card, Badge } from 'react-native-paper';

const LiveViewerScreen = () => {
  return (
    <ScreenLayout>
      <ScrollView contentContainerStyle={styles.container}>
        {/* VIDEO / HERO */}
        <View style={styles.videoWrapper}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1515165562835-c4c9e8b3b6f5?auto=format&fit=crop&w=1200&q=80',
            }}
            style={styles.video}
          />
          <View style={styles.liveBadge}>
            <Badge style={styles.badge}>LIVE</Badge>
          </View>
        </View>

        {/* INFO */}
        <View style={styles.info}>
          <Text style={styles.title}>Beauty & Skincare Essentials</Text>
          <Text style={styles.host}>by Sarah’s Fashion & Tech</Text>
          <Text style={styles.viewers}>👀 2,847 watching</Text>
        </View>

        {/* CTA */}
        <Button mode="contained" style={styles.cta}>
          Buy Featured Product
        </Button>

        {/* PRODUCT CARD */}
        <Card style={styles.productCard}>
          <Text style={styles.productTitle}>Hydrating Face Serum</Text>
          <Text style={styles.productPrice}>€29.99</Text>
          <Button mode="outlined">Add to Cart</Button>
        </Card>

        {/* CHAT PLACEHOLDER */}
        <Card style={styles.chatCard}>
          <Text style={styles.chatTitle}>Live Chat</Text>
          <Text style={styles.chatPlaceholder}>
            Chat will appear here during the live stream
          </Text>
        </Card>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  videoWrapper: {
    height: 220,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  liveBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
  badge: {
    backgroundColor: 'red',
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  host: {
    color: '#666',
    marginBottom: 6,
  },
  viewers: {
    color: '#6200ee',
    fontWeight: '600',
  },
  cta: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 30,
  },
  productCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  productPrice: {
    color: '#6200ee',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  chatCard: {
    marginHorizontal: 16,
    padding: 16,
  },
  chatTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  chatPlaceholder: {
    color: '#999',
  },
});

export default LiveViewerScreen;