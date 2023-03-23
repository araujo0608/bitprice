import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

import styles from './style';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bitprice working...</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

