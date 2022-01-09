import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getCharacterList } from "../../business/actions/character";
import Ionicons from "@expo/vector-icons/Ionicons";
import { dummyData } from "../../data";
import styles from "./styles";
import CharacterList from "./components/CharacterList";

const index = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const {
    getCharacterListLoading,
    getCharacterListResult,
    getCharacterListFail,
  } = useSelector((x) => x.character);

  useEffect(() => {
    _getCharacterList();
    return () => {};
  }, []);

  const _getCharacterList = async () => {
    dispatch(getCharacterList());
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Marvel App</Text>
      </View>
      <TextInput
        placeholder="Search Your Character"
        onChangeText={(text) => setSearchValue(text)}
        value={searchValue}
        underlineColorAndroid="transparent"
        style={styles.input}
      />
      {getCharacterListLoading && !getCharacterListFail ? (
        <ActivityIndicator color={"#1A237E"} size={"large"} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            getCharacterListResult &&
            getCharacterListResult.data &&
            getCharacterListResult.data.results.filter((x) =>
              searchValue.length == 0
                ? true
                : x.name
                    .toLocaleLowerCase()
                    .indexOf(searchValue.toLocaleLowerCase()) > -1
            )
          }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CharacterList item={item} />}
        />
      )}
    </View>
  );
};

export default index;
