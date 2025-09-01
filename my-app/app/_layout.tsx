import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useState, createContext } from 'react';

type Theme = 'light' | 'dark'

interface IThemeContext {
  theme: Theme,
  changeTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | null>(null)

export default function RootLayout() {
  const [theme, setTheme] = useState<Theme>('light')

  const changeTheme = () => {
    setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  }

  return (
      <ThemeContext.Provider value={{theme,changeTheme}}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </ThemeContext.Provider>
  
  );
}
