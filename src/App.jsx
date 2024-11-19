import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <AllRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
