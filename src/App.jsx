import meny from "./Meny";

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
