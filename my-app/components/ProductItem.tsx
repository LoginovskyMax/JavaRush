import React, { useEffect, useState } from 'react';
import {Text, View, Image, Pressable, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import { ProductItem as PropsType } from '@/hooks/useFetch';

type Iprops = {
    data: PropsType
}


const ProductItem = ({data}:Iprops) => {

 const router = useRouter();

 const navigateToProduct = () => {
    router.navigate(`/(tabs)/product-page/${data.id}`)
 }

  return (
    <Pressable style={styles.box}  onPress = {navigateToProduct}>
      <Image source={{uri:data.images[0], width: 172, height:105}}/>
      <View style={styles.textBox}>
        <Text>{data.title}</Text>
         <Text>{data.brand}</Text>
         <Text>${data.price}</Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    gap: 5,
    width:172,
    minWidth: 172,
    backgroundColor: 'gray'
  },

  textBox: {
     padding: 10
  },

   text: {
          height: 40,
          borderColor: 'gray',
          backgroundColor: 'blue',
          width: '100%',
          borderWidth: 1,
          marginBottom: 20
   },
   input: {
        height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20
   }
});