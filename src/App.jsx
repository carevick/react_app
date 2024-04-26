import { createRoot } from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header title="Welcome" />
      {/* <Header title="Title #2" /> */}
      {/* <Header /> */}
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
