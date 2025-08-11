import React, { useState } from 'react';
import {Text, TextInput, View, Button, Image, Pressable, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';

type IProps = {
  name: string;
};

const logo = {
  uri: 'https://media.istockphoto.com/id/1414019690/photo/auto-rickshaw-bajaj-tuktuk-3d-rendering-on-white-background.jpg?s=612x612&w=0&k=20&c=qm75sswRZHLLJeGe0G1WZsioNToC1rhiJpBpTXBAVm8=',
  width: 200,
  height: 200,
};

const Cat = (props:IProps) => {

const [text, setText] = useState('')
const [isHungry, setIsHungry] = useState(true);

 const router = useRouter();

const handleInput = (text: string) => {
    console.log(text);
    setText(text)
}

  return (
    <View style={styles.box}>
      <Text>Hello, I am...{props.name}</Text>

      <TextInput
        style={styles.input}
        defaultValue="Name me!"
        onChangeText={(text) => handleInput(text)}
      />
      <Text>{text}</Text>


     <Button
        onPress={() => {
          setIsHungry(() => !isHungry);
        }}
        title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
      />

      <Text style={{ marginBottom: 20, marginTop: 10}}>{isHungry ? 'Hungry' : 'No hungry'}</Text>

      <Pressable 
        onPress={() => setIsHungry(() => !isHungry)}>
        <Text      
        style={styles.text}>
          Новая кнопка</Text>
      </Pressable>

      <Image source={logo}/>
      <Button title="Go to About" onPress={() => router.navigate('/explore')} />
    </View>
  );
};

export default Cat;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'yellow',
    flexDirection: 'column-reverse',
    flex: 1
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