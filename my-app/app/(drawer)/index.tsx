import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeDrawer() {
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Drawer home page</ThemedText>
        <Link href="/(tabs)" style={styles.link}>
          <ThemedText type="link">Go to home screen tabs!</ThemedText>
        </Link>
        <Link href="/user/12345" style={styles.link}>
          <ThemedText type="link">Go user screen!</ThemedText>
        </Link>
      </ThemedView>
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
