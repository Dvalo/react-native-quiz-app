import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "./styles";

function CategoryItem(props) {
  const navigation = useNavigation();
  const { id, name, img } = props.item;

  return (
    <View style={styles.item}>
      <Pressable
        onPress={() => {
          navigation.navigate("Quiz", {name: name})
        }}
      >
        <ImageBackground
          source={{
            uri: img,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        >
          <View style={styles.imageOlverlay} />
        </ImageBackground>
        <Text style={styles.itemText}>{name}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryItem;
