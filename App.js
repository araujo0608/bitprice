import { SafeAreaView, StatusBar, Image } from 'react-native';

import styles from './style'; // style App.js
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
      <Image source={require("./assets/btc.png")} style={styles.mainLogo}/>
      <Main />

    </SafeAreaView>
  );
}