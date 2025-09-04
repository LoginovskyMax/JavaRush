import { Image } from 'expo-image';
import {StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useContext} from 'react';
import { StoreContext } from '../_layout';
import {Text, View, Image as NativeImage } from 'react-native';

export default function TabTwoScreen() {
  const context = useContext(StoreContext)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
        <Text>Basket</Text>
        {!context?.basket.length && <Text>Basket is empty</Text>}
        {context?.basket.map(product => {
          return <View key={product.id}>
                    <ThemedText type="title">{product.title}</ThemedText>
                      <NativeImage source={{
                        uri:product.images[0],
                        width: 100,
                        height: 100
                      }}/>
                  </View>
        })}


  
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
