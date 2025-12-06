import { Modal } from "./components/Modal";
import snow from "./img/snow.avif";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${snow})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="App"
    >
      <ErrorBoundary>
        <Modal />
      </ErrorBoundary>
    </div>
  );
}

export default App;
