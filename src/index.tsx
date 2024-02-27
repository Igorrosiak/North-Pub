import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Controller } from "./controller";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Controller />);

reportWebVitals();
