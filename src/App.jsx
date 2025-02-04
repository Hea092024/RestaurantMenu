import meny from "./Menu"

function App() {
  return (
    <>
    {meny.map((obj) =>(
      <myCard {...obj} />
    ))}
    </>
  );
}

export default App;
