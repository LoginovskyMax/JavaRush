import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Cabinet() {
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Cabinet</ThemedText>
        <Link href="/(tabs)" style={styles.link}>
          <ThemedText type="link">Go to home screen tabs!</ThemedText>
        </Link>
             <Link href="/register" style={styles.link}>
          <ThemedText type="link">Go to register!</ThemedText>
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
