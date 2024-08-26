import { Provider } from "react-redux";
import { Home } from "@/pages/Home";
import { store } from "@/features/store";

export const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
