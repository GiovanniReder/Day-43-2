import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import Fantasy from "./components/Fantasy";
import Horror from "./components/Horror";
import History from "./components/History";
import Romance from "./components/Romance";
import Scifi from "./components/Scifi";
import SearcBar from "./components/SearchBar";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <div>
        <Welcome />
        <SearcBar />
        

        <SingleBook />
       
        <div className="d-flex justify-content-around">
          <Fantasy />
        </div>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
