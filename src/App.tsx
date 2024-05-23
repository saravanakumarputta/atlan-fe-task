import "./App.css";
import { Header } from "./components/Header";
import { SQLQueryProvider } from "./pages/SQLQueryPage/context/SQLQueryContext";
import { SQLQueryPage } from "./pages/SQLQueryPage";

function App() {
  return (
    <SQLQueryProvider>
      <Header className="px-4" />
      <SQLQueryPage />
    </SQLQueryProvider>
  );
}

export default App;
