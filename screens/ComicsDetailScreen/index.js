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
import { useRoute, useNavigation } from "@react-navigation/native";

import { getCharacterDetail } from "../../business/actions/character";

const index = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const { params } = useRoute();

  
  return (
    <View>
      <Text>Comic Detail</Text>
    </View>
  );
};
export default index;
