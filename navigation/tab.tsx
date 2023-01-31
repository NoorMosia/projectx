import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import icons
import Ionicons from "react-native-vector-icons/Ionicons";

//import screens
import HomeScreen from "../screens/Home";
import FeedScreen from "../screens/Feed";
import ProfileScreen from "../screens/Profile";
import NotificationsScreen from "../screens/Notifications";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";

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
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
