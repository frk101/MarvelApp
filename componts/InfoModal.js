import { Divider } from "native-base";
import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";

import Modal from "react-native-modal";

const InfoModal = ({
  isVisible,
  openOrCloseModal,
  infoData,
  title,
  fullName,
  loading
}) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="#B4B3DB"
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
    
    >
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: 20,
          marginVertical: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1A237E", fontSize: 30, fontWeight: "bold" }}>
            {title}
          </Text>
          <TouchableOpacity onPress={openOrCloseModal}>
            <AntDesign name="closecircleo" size={20} />
          </TouchableOpacity>
        </View>
        <Divider />
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={infoData}
            renderItem={({ item }) => (
              <InfoList
                item={item}
                navigation={navigation}
                openOrCloseModal={openOrCloseModal}
                fullName={fullName}
              />
            )}
          />
        )}
      </View>
    </Modal>
  );
};

InfoModal.propTypes = {};

export default InfoModal;

const InfoList = ({ item, navigation, openOrCloseModal, fullName }) => {

  return (
    <>
      {fullName == true ? (
        <View
          style={{
            flexDirection: "row",
            
            marginHorizontal: 40,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 70, height: 70 }}
            source={{
              uri: item.thumbnail.path + "/standard_amazing.jpg",
            }}
          />

          <View style={{ paddingHorizontal: 20 }}>
            <Text
              style={{ color: "#1A237E", fontSize: 15, fontWeight: "bold" }}
            >
              {item.fullName}
            </Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            openOrCloseModal();
          }}
          onPressIn={() => {
            navigation.navigate("CharacterDetailScreen", item.id);
          }}
          style={{
            flexDirection: "row",
           
            marginHorizontal: 30,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 70, height: 70 }}
            source={{
              uri: item.thumbnail.path + "/standard_amazing.jpg",
            }}
          />

          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={{ color: "#1A237E", fontSize: 15, fontWeight: "bold" }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: 13, }}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}

      <Divider />
    </>
  );
};
