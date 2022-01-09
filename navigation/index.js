import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import CharacterScreen from "../screens/CharactersScreen";
import CharacterDetailScreen from "../screens/CharactersDetailScreen";
import ComicsScreen from "../screens/ComicsScreen";
import ComicsDetailScreen from "../screens/ComicsDetailScreen";
import CharacterOrComicScreen from "../screens/CharacterOrComicScreen";

const Tab = createBottomTabNavigator();

const focusedColor = "#1A237E";
const defaultColor = "#CCCCCC";

function isHidden() {
  return false;
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: focusedColor,
        inactiveTintColor: defaultColor,

        tabStyle: isHidden()
          ? {
              display: "none",
              height: 0,
              width: 0,
            }
          : {},
        style: isHidden()
          ? {
              display: "none",
              height: 0,
              width: 0,
            }
          : {},
      }}
    >
      <Tab.Screen
        name="CharacterScreen"
        component={CharacterScreen}
        options={
          isHidden("CharacterScreen")
            ? {
                tabBarLabel: () => null,
                tabBarAccessibilityLabel: () => null,
                tabBarButton: () => null,
                tabBarIcon: () => null,
              }
            : {
                title: "Karakterler",

                tabBarIcon: ({ color, focused }) => {
                  return (
                    <MaterialCommunityIcons
                      name="format-list-bulleted"
                      size={20}
                      color={focused ? focusedColor : defaultColor}
                    />
                  );
                },
              }
        }
      />
      <Tab.Screen
        name="ComicsScreen"
        component={ComicsScreen}
        options={
          isHidden("ComicsScreen")
            ? {
                tabBarLabel: () => null,
                tabBarAccessibilityLabel: () => null,
                tabBarButton: () => null,
                tabBarIcon: () => null,
              }
            : {
                title: "Çizgi Romanlar",

                tabBarIcon: ({ color, focused }) => (
                  <Entypo
                    name="open-book"
                    size={18}
                    color={focused ? focusedColor : defaultColor}
                  />
                ),
              }
        }
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
          name="CharacterDetailScreen"
          component={CharacterDetailScreen}
        />
        <Stack.Screen
          name="ComicsDetailScreen"
          component={ComicsDetailScreen}
        />
        <Stack.Screen
          name="CharacterOrComicScreen"
          component={CharacterOrComicScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
