import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.js"
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
