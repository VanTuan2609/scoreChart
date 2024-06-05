import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const routesItems = useRoutes(routes);
  return routesItems;
}

export default App;
