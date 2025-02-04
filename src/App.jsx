import meny from "./Meny";
import MyCard from "./Dish";

function App() {
  return (
    <>
      {meny.map((obj) => (
        <MyCard key={obj.id} {...obj} />
      ))}
    </>
  );
}

export default App;
