import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Linking,
  FlatList,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Zocial,
  FontAwesome5,
  MaterialIcons,
} from "react-native-vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";

import styles from "./styles";
import CharacterOrComicsList from "./components/CharacterOrComicsList";
import { getCharacterOrComics } from "../../business/actions/character";
const index = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

   const {
     getCharacterOrComicsLoading,
     getCharacterOrComicsResult,
     getCharacterOrComicsFail,
   } = useSelector((x) => x.character);

  useEffect(() => {
    _getCharacterOrComics();
    return () => {};
  }, []);

  const _getCharacterOrComics = async () => {
    dispatch(getCharacterOrComics(route.params))
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tasksWrapper}>
        <Ionicons
          name="arrow-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      {getCharacterOrComicsLoading && !getCharacterOrComicsFail ? (
        <ActivityIndicator color={"#1A237E"} size={"large"} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            getCharacterOrComicsResult &&
            getCharacterOrComicsResult.data &&
            getCharacterOrComicsResult.data.results
          }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CharacterOrComicsList item={item} />}
        />
      )}
    </View>
  );
};
export default index;
