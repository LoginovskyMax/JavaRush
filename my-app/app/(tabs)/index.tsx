import { Image } from 'expo-image';
import { StyleSheet, Button, Text, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Link, useRouter } from 'expo-router';
import useFetch, { ProductItem as ProductType } from '@/hooks/useFetch';
import { useEffect } from 'react';
import ProductItem from '@/components/ProductItem';



export default function HomeScreen() {
   const router = useRouter();

   const {data, isLoading, getData} = useFetch()

   useEffect(() => {
      getData({query: 'limit=10'})
   }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/mainBanner.png')}
          style={styles.reactLogo}
        />
      }>
        {isLoading && <Text>Загрузка</Text>}
        {!isLoading && <View style={styles.productContainer}>
          {(data as ProductType[]).map(product => <ProductItem data={product} key={product.id} />)}
          </View>}
      {/* <Link href="/explore">
      <ThemedText type="link">Go to explore index!</ThemedText>
      </Link> */}

      {/* <Button title="Save Data" onPress={() => router.navigate('/register')} /> */}
    </ParallaxScrollView>
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
