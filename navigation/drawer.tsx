import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import icons
import Ionicons from "react-native-vector-icons/Ionicons";

//import screens
import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home";
            } else if (route.name === "Feed") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person-outline" : "ios-person";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "notifications-outline"
                : "ios-notifications";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Feed" component={SettingsScreen} />
        <Tab.Screen name="Notifications" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
