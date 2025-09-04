import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useState, createContext } from 'react';
import { ProductItem } from '@/hooks/useFetch';

type Basket = ProductItem []

interface IThemeContext {
  basket: Basket,
  addToBasket: (item:ProductItem) => void
}

export const StoreContext = createContext<IThemeContext | null>(null)

export default function RootLayout() {
  const [basket, setBasket] = useState<Basket>([])

  const addToBasket = (product:ProductItem) => {
    const prevBasket = [...basket]

    prevBasket.push(product)

    setBasket( prevBasket )
  }

  return (
      <StoreContext.Provider value={{basket, addToBasket}}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </StoreContext.Provider>
  );
}
