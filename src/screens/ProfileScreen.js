
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Avatar, Button, Divider, Text } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text size={80} label="US" style={styles.avatar} />
        <Text style={styles.name}>Usuario Demo</Text>
        <Text style={styles.email}>demo@liveshop.com</Text>
      </View>

      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader>Cuenta</List.Subheader>
        <List.Item
          title="Mis pedidos"
          left={props => <List.Icon {...props} icon="package-variant" />}
          onPress={() => {}}
        />
        <List.Item
          title="Direcciones"
          left={props => <List.Icon {...props} icon="map-marker" />}
          onPress={() => {}}
        />
        <List.Item
          title="Métodos de pago"
          left={props => <List.Icon {...props} icon="credit-card" />}
          onPress={() => {}}
        />
      </List.Section>

      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader>Configuración</List.Subheader>
        <List.Item
          title="Notificaciones"
          left={props => <List.Icon {...props} icon="bell" />}
          onPress={() => {}}
        />
        <List.Item
          title="Privacidad"
          left={props => <List.Icon {...props} icon="shield-account" />}
          onPress={() => {}}
        />
      </List.Section>

      <Button 
        mode="outlined" 
        onPress={() => console.log('Logout')}
        style={styles.logoutButton}
        textColor="#d32f2f">
        Cerrar Sesión
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    backgroundColor: '#6200ee',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    marginVertical: 8,
  },
  logoutButton: {
    margin: 20,
    borderColor: '#d32f2f',
  },
});

export default ProfileScreen;