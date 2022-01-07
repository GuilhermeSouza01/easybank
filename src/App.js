import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import MainTitle from "./components/MainTitle/MainTitle";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Intro />
      <MainTitle title="Why choose Easybank?"/>
      <MainTitle title="Latest Articles"/>
    </div>
  );
}

export default App;
