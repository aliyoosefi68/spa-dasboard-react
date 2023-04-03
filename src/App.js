import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar.jsx";

//style
import "./App.css";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
