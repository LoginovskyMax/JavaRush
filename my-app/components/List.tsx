import React from 'react';
import {Text, SectionList, View, StyleSheet, FlatList} from 'react-native';

type IProps = {
  data: {
    title: string,
    data: string[]
    }[];
};

const List = (props:IProps) => {

  return (
    <View>
      <SectionList
        sections={props.data}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => item}
      />

    <FlatList
        data={props.data}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
    />

    <Text>Custom list</Text>
    {props.data.map(item => <View key={item.title}>
        <Text style={styles.sectionHeader}>{item.title}</Text>
         {item.data.map((subTitle, index) => <Text key={index} style={styles.item}>{index+1}:{subTitle}</Text>)}
    </View>)}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});