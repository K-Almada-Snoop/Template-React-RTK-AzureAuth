import Header from "./components/Header/Header";
import AppRoutes from "./routes/BaseRoutes";
import './styles/App.scss'
function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
