import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer, BackToTop } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <AllRoutes />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
