import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

const CharacterList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ComicsDetailScreen", item.id)}
    >
      <View style={styles.containerList}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 }}
              source={{
                uri: item.thumbnail.path + "/standard_small.jpg",
              }}
            />
          </View>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
        <Text style={styles.itemEpisode}>{item.description}</Text>

        <Text style={styles.itemTexts}>Sayfa Sayısı : {item.pageCount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterList;
