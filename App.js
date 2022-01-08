import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import promise from "redux-promise-middleware";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";
import { NativeBaseProvider } from "native-base";

import reducers from "./business/reducers";

export default function App() {
  const client = {
    ["default"]: {
      client: axios.create({
        baseURL: "http://gateway.marvel.com/v1/public",
        responseType: "json",
      }),
    },
  };

  const store = createStore(
    reducers,
    {},
    applyMiddleware(promise, thunk, multiClientMiddleware(client))
  );

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Navigation />
        <StatusBar />
      </Provider>
    </NativeBaseProvider>
  );
}
