import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";

const CharacterList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CharacterDetailScreen",  item.id)}
    >
      <View style={styles.containerList}>
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <Image
              source={{
                uri: item.thumbnail.path + "/standard_small.jpg",
              }}
              style={{ height: 50, width: 50, borderRadius: 50 }}
            />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        </View>
        <Text style={styles.itemEpisode}>{item.description}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.itemTexts}>
            Çizgi Romanlar : {item.comics.available}
          </Text>
          <Text style={styles.itemTexts}>
            Hikayeler : {item.stories.available}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterList;
