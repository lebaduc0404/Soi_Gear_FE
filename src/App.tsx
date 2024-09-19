import { Toaster } from "./components/ui/toaster";
import Router from "./routes";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5", height: "100%" }}>
        <Router />
        <Toaster />
      </div>
    </>
  );
}

export default App;
