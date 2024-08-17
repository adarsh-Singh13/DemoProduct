import "react-native-gesture-handler";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from 'react-native';
import { store } from "./src/redux/Store";
import AppNavigator from "./src/navigators/AppNavigator";
import { LoaderScreen } from "./src/containers/loaderScreen/LoaderScreen";

export default function App() {
  const [gateLifted, setGateLifted] = useState(false);
    setTimeout(() => {
      setGateLifted(true);
    }, 3000);

  return (
    <Provider store={store}>
        <NavigationContainer >
          <StatusBar hidden />
          { gateLifted ? <AppNavigator /> : <LoaderScreen/>}
        </NavigationContainer>
    </Provider>
  );
}