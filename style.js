import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#29272C',
      alignItems: 'center',
      paddingTop: Platform.OS === "android" ? 20 : 0 // if Android apply 40 paddingTop
    }
  });

export default styles;