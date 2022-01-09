import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Linking,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  Zocial,
  FontAwesome5,
  MaterialIcons,
} from "react-native-vector-icons";
import {
  getCharacterDetail,
} from "../../business/actions/character";
import style from "./styles";
const index = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {
    getCharacterDetailLoading,
    getCharacterDetailResult,
    getCharacterDetailFail,
   
  } = useSelector((x) => x.character);

  useEffect(() => {
    _getCharacterDetail();
    return () => {};
  }, []);

  const _getCharacterDetail = async () => {
    dispatch(getCharacterDetail(route.params));
  };
  
  return (
    <>
      {getCharacterDetailLoading && !getCharacterDetailFail ? (
        <ActivityIndicator color={"#1A237E"} size={"large"} />
      ) : (
        <View style={{ flex: 1, backgroundColor: "#E8EAED" }}>
          <ScrollView>
            <Image
              style={style.image}
              source={{
                uri:
                  getCharacterDetailResult &&
                  getCharacterDetailResult.thumbnail &&
                  getCharacterDetailResult.thumbnail.path +
                    "/landscape_xlarge.jpg",
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={style.buttonContainer}
            >
              <Ionicons name="arrow-back-outline" size={18} color="#ffffff" />
            </TouchableOpacity>

            <Text style={style.name}>{getCharacterDetailResult.name}</Text>
            <View style={style.listContainer}>
              <Text style={style.title}>
                {getCharacterDetailResult.description}
              </Text>
            </View>
            <TouchableOpacity
              style={style.listContainer}
              onPress={() => navigation.navigate("CharacterOrComicScreen",route.params)}
            >
              <Text style={style.marvelTitle}>
                Toplam Comic Sayısı :
                <Text style={style.title}>
                  {""}{" "}
                  {getCharacterDetailResult &&
                    getCharacterDetailResult.comics &&
                    getCharacterDetailResult.comics.available}
                </Text>
              </Text>
            </TouchableOpacity>
            <View style={style.listContainer}>
              <Text style={style.baslik}>
                Toplam Story Sayısı :
                <Text style={style.title}>
                  {""}{" "}
                  {getCharacterDetailResult &&
                    getCharacterDetailResult.stories &&
                    getCharacterDetailResult.stories.available}
                </Text>
              </Text>
            </View>
            <View style={style.listContainer}>
              <Text style={style.baslik}>
                Toplam Series Sayısı :
                <Text style={style.title}>
                  {""}{" "}
                  {getCharacterDetailResult &&
                    getCharacterDetailResult.series &&
                    getCharacterDetailResult.series.available}
                </Text>
              </Text>
            </View>
            <View style={style.listContainer}>
              <Text style={style.baslik}>
                Toplam Events Sayısı :
                <Text style={style.title}>
                  {""}{" "}
                  {getCharacterDetailResult &&
                    getCharacterDetailResult.events &&
                    getCharacterDetailResult.events.available}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={style.listContainer}
              onPress={() =>
                Linking.openURL(
                  getCharacterDetailResult &&
                    getCharacterDetailResult.urls &&
                    getCharacterDetailResult.urls[1] &&
                    getCharacterDetailResult.urls[1].url
                )
              }
            >
              <Text style={style.marvelTitle}>Marvel Profil</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </>
  );
};
export default index;
