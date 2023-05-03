import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";
import AppProvider from "./AppContext";

function App() {
  return (
    <AppProvider>
      <Nav />
      <Main />
    </AppProvider>
  );
}

export default App;
