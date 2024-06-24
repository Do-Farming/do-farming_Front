import * as React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components/native"; // styled-components의 ThemeProvider import
import theme from "./src/styles/theme"; // styled-components에서 사용할 테마 import

// Screens
import { useColorScheme } from "react-native";
import HomeScreen from "./src/screens/home/HomeScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import ExampleScreen from "./src/screens/ExampleScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Example") {
            iconName = focused ? "star" : "star-outline";
          } else {
            iconName = "home"; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { display: "flex" },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home Screen" }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: "Explore Screen" }}
      />
      <Tab.Screen
        name="Example"
        component={ExampleScreen}
        options={{ title: "Example Screen" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();

  return (
    <StyledComponentsThemeProvider theme={theme}>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={MyTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StyledComponentsThemeProvider>
  );
}
