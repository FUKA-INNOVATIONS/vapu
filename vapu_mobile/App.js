import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

import Navigator from './navigators/Navigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
        <Navigator />
    </>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default App;

/*<SafeAreaView style={styles.droidSafeArea}>
<Home />
</SafeAreaView>
*/
