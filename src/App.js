import { Provider } from "react-redux";
import "./App.css";
import UsersPage from "./pages/UsersPage";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <UsersPage />
    </Provider>
  );
}

export default App;
