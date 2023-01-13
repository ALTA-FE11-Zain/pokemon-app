import ReactDOM from "react-dom/client";
import axios from "axios";

import App from "routes";
import "styles/index.css";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
