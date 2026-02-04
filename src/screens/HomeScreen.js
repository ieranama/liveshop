import ScreenLayout from '../components/ScreenLayout';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button, Badge } from 'react-native-paper';

const streams = [
  {
    id: "1",
    title: "Beauty & Skincare Essentials",
    host: "Sarah's Fashion & Tech",
    viewers: 2847,
    thumbnail: "https://images.unsplash.com/photo-1765534639747-104beb5cb821?auto=format&fit=crop&w=1080&q=80",
    isLive: true,
  },
  {
    id: "2",
    title: "Tech Gadgets & Electronics",
    host: "Tech Trends Daily",
    thumbnail: "https://images.unsplash.com/photo-1754667167006-aad09810a454?auto=format&fit=crop&w=1080&q=80",
    isLive: false,
    startTime: "Today at 3:00 PM",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScreenLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <View style={styles.hero}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1758520387811-7b406f7225bf?auto=format&fit=crop&w=1080&q=80",
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />

          <View style={styles.heroInner}>
            <Badge style={styles.liveBadge}>LIVE NOW</Badge>

            <Text style={styles.heroTitle}>
              Shop Live,{'\n'}Shop Smart
            </Text>

            <Text style={styles.heroSubtitle}>
              Join thousands of shoppers discovering amazing deals in real-time.
            </Text>

            <Button
              mode="contained"
              style={styles.heroButton}
              onPress={() => navigation.navigate('LiveViewer')}
            >
              Join Live Stream
            </Button>
          </View>
        </View>

        {/* STREAMS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live & Upcoming Streams</Text>

          {streams.map((stream) => (
            <Card key={stream.id} style={styles.card}>
              <Image source={{ uri: stream.thumbnail }} style={styles.thumb} />
              <View style={styles.cardContent}>
                <Text style={styles.streamTitle}>{stream.title}</Text>
                <Text style={styles.streamHost}>{stream.host}</Text>

                <Button
                  mode={stream.isLive ? "contained" : "outlined"}
                  disabled={!stream.isLive}
                  onPress={() => navigation.navigate('LiveViewer')}
                >
                  {stream.isLive ? "Watch Now" : stream.startTime}
                </Button>
              </View>
            </Card>
          ))}
        </View>

        {/* FEATURES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why LiveShop?</Text>

          <Card style={styles.featureCard}>
            <Text style={styles.featureTitle}>Live Shopping</Text>
            <Text style={styles.featureText}>
              Watch live streams and shop featured products in real-time
            </Text>
          </Card>

          <Card style={styles.featureCard}>
            <Text style={styles.featureTitle}>Community Chat</Text>
            <Text style={styles.featureText}>
              Connect with other shoppers during live streams
            </Text>
          </Card>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  hero: {
    height: 320,
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(98,0,238,0.65)',
  },
  heroInner: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 16,
  },
  heroButton: {
    borderRadius: 30,
  },
  liveBadge: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    backgroundColor: 'red',
  },

  section: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },

  card: { marginBottom: 15, overflow: 'hidden' },
  thumb: { width: '100%', height: 180 },
  cardContent: { padding: 15 },
  streamTitle: { fontWeight: 'bold', fontSize: 16 },
  streamHost: { color: '#666', marginBottom: 10 },

  featureCard: { padding: 20, marginBottom: 15 },
  featureTitle: { fontWeight: 'bold', fontSize: 16 },
  featureText: { color: '#666' },
});

export default HomeScreen;