import { SafeAreaView, StatusBar } from 'react-native';

import styles from './style';
import Main from './src/components/Main';
import HeaderTitle from './src/components/HeaderTitle';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='white'
        barStyle="dark-content" // black icons
      />
      
      <HeaderTitle />
      <Main />
    </SafeAreaView>
  );
}