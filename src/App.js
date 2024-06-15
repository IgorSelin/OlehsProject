import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router";
import MainLayout from "./componets/Layout";

function App() {
  return (
    <MainLayout>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MainLayout>
  );
}

export default App;
