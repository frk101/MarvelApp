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

import { getComicsList } from "../../business/actions/comics";
import ComicsList from './components/ComicsList'
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

const index = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const {
    getComicsListLoading,
    getComicsListResult,
    getComicsListFail,
  } = useSelector((x) => x.comics);

  useEffect(() => {
    _getComicsList();
    return () => {};
  }, []);

  const _getComicsList = async () => {
    dispatch(getComicsList())
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Çizgi Romanlar</Text>
      </View>
      <TextInput
        placeholder="Search Your Comics"
        onChangeText={(text) => setSearchValue(text)}
        value={searchValue}
        underlineColorAndroid="transparent"
        style={styles.input}
      />
      {getComicsListLoading && !getComicsListFail ? (
        <ActivityIndicator color={"#1A237E"} size={"large"} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={
            getComicsListResult &&
            getComicsListResult.data &&
            getComicsListResult.data.results.filter((x) =>
              searchValue.length == 0
                ? true
                : x.title
                    .toLocaleLowerCase()
                    .indexOf(searchValue.toLocaleLowerCase()) > -1
            )
          }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ComicsList item={item} />}
        />
      )}
    </View>
  );
};

export default index;
