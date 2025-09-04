import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useFetch, { ProductItem } from '@/hooks/useFetch';
import { useContext, useEffect, useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { StoreContext } from '@/app/_layout';

export default function RegisterScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();

     const context = useContext(StoreContext)

     const [product, setProduct] = useState<ProductItem | null>(null)

    const {data, isLoading, getData} = useFetch()

    const addToBag = () => {
      console.log('Добавление в корзины');
      if(product){
         context?.addToBasket(product)
      }
    }

    useEffect(() => {
      getData({id})
    }, [])

    useEffect(() => {
        if(data){
           setProduct(data as ProductItem)
        }
    }, [data])

  return (
    <>
    {isLoading && <Text>Загрузка</Text>}
    {product && <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={{uri:product.images[0], width: 172, height:105}}
          style={styles.reactLogo}
        />
      }>
        <ThemedView>
          <ThemedText>{product.rating}</ThemedText>
          <Text>{product.title}</Text>
          <Text>{product.brand}</Text>
          <Text>${product.price}</Text>
          
          <ThemedText>{product.description}</ThemedText>
          <Pressable onPress={addToBag}>
             <Text>Add to bag</Text>
          </Pressable>
        </ThemedView>
    </ParallaxScrollView>}

    </>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    width: 'auto',
    minWidth: 300,
    flexWrap: 'wrap',
    gap: 5
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 167,
    width: 375,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
