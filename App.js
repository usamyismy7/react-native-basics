import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput} from 'react-native';
import { View, Image, ScrollView } from 'react-native';
import { FlatList, SectionList, Button } from 'react-native';
import React, { useState } from 'react';
import Random from "./assets/Random";

const ScrollViews = () => {
  let value = [];
  for (let i = 1; i < 101; i++) {
    value[i - 1] = i + " ";
  }
  return (
    <ScrollView horizontal style={styles.scrollView}>
      <Text>{value}</Text>
      <Text>{value}</Text>
      <Text>{value}</Text>
      <Text>{value}</Text>
    </ScrollView>
  );
};


const FlatViews = () => {
  let value = [];
  for (let i = 1; i < 101; i++) {
    value[i - 1] = i + " ";
  }
  const input = [
    { name: value },
    { name: value },
    { name: value },
    { name: value },
  ];
  return (
    <FlatList
      style={styles.flatList}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={input}
      renderItem={({ item }) => {
        return <Text> {item.name}</Text>;
      }}
    />
  );
};
/*
function shuffle() {
  var cards = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen", "King"];
  for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
  }
  for(i=0;i<3;i++){
    console.log("Card: "+cards[i]);
  }
}
*/
export default function App() {
  const [textI, setTextI] = useState('Red');
  return (
    <><ScrollView contentContainerStyle={styles.container}>
        <View style={styles.view}>
          <Text style={styles.textStyle}>
            My favorite color is {textI}!
          </Text>
          <TextInput  onChangeText={(value) => { setTextI(value); } }>
            
          </TextInput>
          <StatusBar style="auto" />
          <Text>Using ScrollView</Text>
          <ScrollViews />
          <Text>Using FlatList</Text>
          <FlatViews />

          <Random />
        </View>
      </ScrollView></>
      );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    marginHorizontal: 50,
  },
  scrollView: {
    marginHorizontal: 50,
  },
  textInput: {
    width: 300,
    height: 80,
    marginBottom: 50,
    borderWidth: 5,
    borderColor: "black",
    color: "#a9c0cb",
  },
  texts: { marginTop: 10, textAlign: "center" },
  viewStyle: {
    backgroundColor: "#edf1fe",
    flex: 1,
    alignItems: "center",
  },
  textStyle: { marginTop: 70, marginBottom: 5 },
});
