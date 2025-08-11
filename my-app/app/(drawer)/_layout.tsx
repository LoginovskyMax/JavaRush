import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


export default function RegisterScreen() {
  return (
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="cabinet" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Cabinet',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'HomeDrawer',
            title: 'overview',
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
      {/* <ThemedView style={styles.container}>
        <ThemedText type="title">Registrartion</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
        <Link href="/user/12345" style={styles.link}>
          <ThemedText type="link">Go user screen!</ThemedText>
        </Link>
      </ThemedView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
