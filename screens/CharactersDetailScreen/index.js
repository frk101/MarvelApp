import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";


import { useSelector, useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  Zocial,
  FontAwesome5,
  MaterialIcons,
} from "react-native-vector-icons";
import { getCharacterDetail } from "../../business/actions/character";
import style from "./styles";
const index = () => {
  const dispatch = useDispatch();
  const navigation=useNavigation()
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
     dispatch(getCharacterDetail(route.params))
   };
   console.log(getCharacterDetailResult.name);
  return (
    <View style={{ flex: 1, backgroundColor: "#E8EAED" }}>
      <Image  style={style.image} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.buttonContainer}
      >
        <Ionicons name="arrow-back-outline" size={18} color="#ffffff" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={style.name}>{route.params.name}</Text>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Cinsiyet:
            <Text style={style.title}>
             dsa
            </Text>
          </Text>
          <FontAwesome
            name={"male" }
            size={30}
          
          />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Lokasyon:
            <Text style={style.title}>
              das
            </Text>
          </Text>
          <MaterialIcons
            name="location-history"
            size={30}
           
          />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Statu:
            <Text style={style.title}>dassa</Text>
          </Text>
          <Zocial name="statusnet" size={30}  />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Çeşit:
            <Text style={style.title}>{route.params.species}</Text>
          </Text>
          <FontAwesome5 name="ghost" size={30}  />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Köken:
            <Text style={style.title}>dsa</Text>
          </Text>

          <Ionicons name="location" size={30}  />
        </View>
      </ScrollView>
    </View>
  );
};
export default index;
