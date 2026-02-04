import ScreenLayout from '../components/ScreenLayout';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { useState } from 'react';

const ProfileScreen = () => {
  // ⚠️ TEMPORAL: luego vendrá de Firebase
  const [isSeller, setIsSeller] = useState(false);

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {/* USER INFO */}
        <View style={styles.header}>
          <Avatar.Text
            size={72}
            label="IM"
            style={styles.avatar}
          />
          <Text style={styles.name}>Iñigo Marin</Text>
          <Text style={styles.email}>ieranamarin@gmail.com</Text>
        </View>

        {/* ROLE SWITCH */}
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Account type</Text>

          <View style={styles.roleRow}>
            <Text style={styles.roleText}>
              {isSeller ? 'Seller mode' : 'Buyer mode'}
            </Text>
            <Switch
              value={isSeller}
              onValueChange={setIsSeller}
              thumbColor={isSeller ? '#6200ee' : '#ccc'}
            />
          </View>

          <Text style={styles.helper}>
            {isSeller
              ? 'You can host live streams and sell products'
              : 'You can watch live streams and shop products'}
          </Text>
        </Card>

        {/* ACTIONS */}
        {isSeller ? (
          <>
            <Card style={styles.card}>
              <Button
                mode="contained"
                onPress={() => {}}
              >
                🎥 Go Live
              </Button>
            </Card>

            <Card style={styles.card}>
              <Button mode="outlined">My Products</Button>
              <Button mode="outlined" style={styles.secondary}>
                Earnings
              </Button>
            </Card>
          </>
        ) : (
          <>
            <Card style={styles.card}>
              <Button mode="outlined">My Orders</Button>
              <Button mode="outlined" style={styles.secondary}>
                Payment Methods
              </Button>
            </Card>
          </>
        )}

        {/* LOGOUT */}
        <Card style={styles.card}>
          <Button mode="text" textColor="red">
            Log out
          </Button>
        </Card>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    backgroundColor: '#6200ee',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
  },
  card: {
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
    fontSize: 16,
  },
  roleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roleText: {
    fontSize: 16,
    fontWeight: '500',
  },
  helper: {
    marginTop: 8,
    color: '#666',
    fontSize: 13,
  },
  secondary: {
    marginTop: 8,
  },
});

export default ProfileScreen;