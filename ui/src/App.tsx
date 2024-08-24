import { store } from "./app/store";
import { Provider } from "react-redux";
import { Home } from "@/pages/Home";

export const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
