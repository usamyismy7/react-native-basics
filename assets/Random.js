import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Image } from "react-native";

let obj = [
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 9 },
  { name: 10 },
  { name: "Ace" },
  { name: "Jack" },
  { name: "Queen" },
  { name: "King" },
];
let Arr = [];
for (let j = 0; j < 13; j++) {
  Arr.push("Club_" + obj[j].name + ".png");
}
for (let j = 0; j < 13; j++) {
  Arr.push("Diamonds_" + obj[j].name + ".png");
}
for (let j = 0; j < 13; j++) {
  Arr.push("Heart_" + obj[j].name + ".png");
}
for (let j = 0; j < 13; j++) {
  Arr.push("Spades_" + obj[j].name + ".png");
}
let deck = [
  require("../assets/cards/Club_2.png"),
  require("../assets/cards/Club_3.png"),
  require("../assets/cards/Club_4.png"),
  require("../assets/cards/Club_5.png"),
  require("../assets/cards/Club_6.png"),
  require("../assets/cards/Club_7.png"),
  require("../assets/cards/Club_8.png"),
  require("../assets/cards/Club_9.png"),
  require("../assets/cards/Club_10.png"),
  require("../assets/cards/Club_Ace.png"),
  require("../assets/cards/Club_Jack.png"),
  require("../assets/cards/Club_Queen.png"),
  require("../assets/cards/Club_King.png"),

  require("../assets/cards/Heart_2.png"),
  require("../assets/cards/Heart_3.png"),
  require("../assets/cards/Heart_4.png"),
  require("../assets/cards/Heart_5.png"),
  require("../assets/cards/Heart_6.png"),
  require("../assets/cards/Heart_7.png"),
  require("../assets/cards/Heart_8.png"),
  require("../assets/cards/Heart_9.png"),
  require("../assets/cards/Heart_10.png"),
  require("../assets/cards/Heart_Ace.png"),
  require("../assets/cards/Heart_Jack.png"),
  require("../assets/cards/Heart_Queen.png"),
  require("../assets/cards/Heart_King.png"),

  require("../assets/cards/Diamonds_2.png"),
  require("../assets/cards/Diamonds_3.png"),
  require("../assets/cards/Diamonds_4.png"),
  require("../assets/cards/Diamonds_5.png"),
  require("../assets/cards/Diamonds_6.png"),
  require("../assets/cards/Diamonds_7.png"),
  require("../assets/cards/Diamonds_8.png"),
  require("../assets/cards/Diamonds_9.png"),
  require("../assets/cards/Diamonds_10.png"),
  require("../assets/cards/Diamonds_Ace.png"),
  require("../assets/cards/Diamonds_Jack.png"),
  require("../assets/cards/Diamonds_Queen.png"),
  require("../assets/cards/Diamonds_King.png"),

  require("../assets/cards/Spades_2.png"),
  require("../assets/cards/Spades_3.png"),
  require("../assets/cards/Spades_4.png"),
  require("../assets/cards/Spades_5.png"),
  require("../assets/cards/Spades_6.png"),
  require("../assets/cards/Spades_7.png"),
  require("../assets/cards/Spades_8.png"),
  require("../assets/cards/Spades_9.png"),
  require("../assets/cards/Spades_10.png"),
  require("../assets/cards/Spades_Ace.png"),
  require("../assets/cards/Spades_Jack.png"),
  require("../assets/cards/Spades_Queen.png"),
  require("../assets/cards/Spades_King.png"),
];

const RandomImages = () => {
  const [random1, setRandom1] = useState(
    Math.floor(Math.random() * deck.length) + 1
  );
  const [random2, setRandom2] = useState(
    Math.floor(Math.random() * deck.length) + 1
  );
  const [random3, setRandom3] = useState(
    Math.floor(Math.random() * deck.length) + 1
  );
  return (
    <View>
      <Image source={deck[random1]} style={styles.img} />
      <Text>{Arr[random1]}</Text>
      <Image source={deck[random2]} style={styles.img} />
      <Text>{Arr[random2]}</Text>
      <Image source={deck[random3]} style={styles.img} />
      <Text>{Arr[random3]}</Text>
      <Button
        title="Reload"
        onPress={() => {
          setRandom1(Math.floor(Math.random() * deck.length) + 1);
          setRandom2(Math.floor(Math.random() * deck.length) + 1);
          setRandom3(Math.floor(Math.random() * deck.length) + 1);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 140,
  },
});

export default RandomImages;
