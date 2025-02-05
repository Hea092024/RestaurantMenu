import Menu from "./Menu.jsx";
import MenuData from "./menuData.js";

function App() {
  return (
    <div className="bg-darkseagreen min-h-screen p-8">
      <Menu menu={MenuData} />
    </div>
  );
}

export default App;
