import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import AppHeader from './AppHeader';

const ScreenLayout = ({ children }) => {
  return (
    <>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="#ffffff"
      />

      <SafeAreaView style={styles.safe}>
        <AppHeader />
        <View style={styles.content}>
          {children}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default ScreenLayout;