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
import { Ionicons } from "react-native-vector-icons";
import InfoModal from "../../componts/InfoModal";

import { getComicsDetail,getComicsOrCharacter,getComicsOrCreators } from "../../business/actions/comics";
import style from "./styles";

const index = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [creatorsModalVisible, setCreatorsModalVisible] = useState(false);
  const [charactersModalVisible,setCharactersModalVisible]=useState(false)
  const creatorsModal = () => {
    setCreatorsModalVisible(!creatorsModalVisible);
  };
 const charactersModal = () => {
   setCharactersModalVisible(!charactersModalVisible);
 };
  const {
    getComicsDetailLoading,
    getComicsDetailListResult,
    getComicsDetailFail,
    getComicsOrCharacterResult,
    getComicsOrCharacterLoading,

    getComicsOrCreatorsResult,
    getComicsOrCreatorsLoading,
  } = useSelector((x) => x.comics);

  useEffect(() => {
    _getComicsDetail();
  _getComicsOrCharacter();
  _getComicsOrCreators()
    return () => {};
  }, []);

  const _getComicsDetail = async () => {
    dispatch(getComicsDetail(route.params));
  };
 const _getComicsOrCharacter = async () => {
   dispatch(getComicsOrCharacter(route.params))
 };
 const _getComicsOrCreators = async () => {
   dispatch(getComicsOrCreators(route.params))
 };
  return (
    <View style={{ flex: 1, backgroundColor: "#E8EAED" }}>
      {getComicsDetailLoading && !getComicsDetailFail ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Image
            style={style.image}
            source={{
              uri:
                getComicsDetailListResult &&
                getComicsDetailListResult.data &&
                getComicsDetailListResult.data.results &&
                getComicsDetailListResult.data.results[0].thumbnail &&
                getComicsDetailListResult.data.results[0].thumbnail.path +
                  "/standard_amazing.jpg",
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={style.buttonContainer}
          >
            <Ionicons name="arrow-back-outline" size={18} color="#ffffff" />
          </TouchableOpacity>

          <Text style={style.name}>
            {getComicsDetailListResult &&
              getComicsDetailListResult.data &&
              getComicsDetailListResult.data.results &&
              getComicsDetailListResult.data.results[0].title}
          </Text>
          <View style={style.listContainer}>
            <Text style={style.title}>
              {getComicsDetailListResult &&
                getComicsDetailListResult.data &&
                getComicsDetailListResult.data.results &&
                getComicsDetailListResult.data.results[0].description}
            </Text>
          </View>
          <View style={style.listContainer}>
            <Text style={style.baslik}>
              Toplam Sayfa Sayısı :
              <Text style={style.title}>
                {""}{" "}
                {getComicsDetailListResult &&
                  getComicsDetailListResult.data &&
                  getComicsDetailListResult.data.results &&
                  getComicsDetailListResult.data.results[0].pageCount}
              </Text>
            </Text>
          </View>
          <TouchableOpacity style={style.listContainer} onPress={creatorsModal}>
            <Text style={style.marvelTitle}>Çizgi Roman Yazarları</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.listContainer}
            onPress={charactersModal}
          >
            <Text style={style.marvelTitle}>Karakterler</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.listContainer}
            onPress={() =>
              Linking.openURL(
                getComicsDetailListResult &&
                  getComicsDetailListResult.data &&
                  getComicsDetailListResult.data.results &&
                  getComicsDetailListResult.data.results[0].urls &&
                  getComicsDetailListResult.data.results[0].urls[0] &&
                  getComicsDetailListResult.data.results[0].urls[0].url
              )
            }
          >
            <Text style={style.marvelTitle}>Marvel Profil</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
      <InfoModal
        isVisible={creatorsModalVisible}
        fullName={true}
        loading={getComicsOrCreatorsLoading}
        openOrCloseModal={creatorsModal}
        infoData={
          getComicsOrCreatorsResult &&
          getComicsOrCreatorsResult.data &&
          getComicsOrCreatorsResult.data.results
        }
        title={"Yazarlar"}
      />

      <InfoModal
        fullName={false}
        loading={getComicsOrCharacterLoading}
        infoData={
          getComicsOrCharacterResult &&
          getComicsOrCharacterResult.data &&
          getComicsOrCharacterResult.data.results
        }
        isVisible={charactersModalVisible}
        openOrCloseModal={charactersModal}
        title={"Karakterler"}
      />
    </View>
  );
};
export default index;
