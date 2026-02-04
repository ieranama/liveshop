import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const AppHeader = () => {
  return (
    <View>
      {/* HEADER protegido por SafeArea */}
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <View style={styles.logoBox} />
          <View>
            <Text style={styles.title}>live.shop</Text>
            <Text style={styles.subtitle}>Shop Live, Shop Smart</Text>
          </View>
        </View>
      </SafeAreaView>

      {/* BANNER FUERA de SafeArea */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          🎉 Live stream starting in 5 minutes! Free shipping on orders over $50
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safe: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  logoBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#6200ee',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  banner: {
    backgroundColor: '#6200ee',
    paddingVertical: 8,
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default AppHeader;