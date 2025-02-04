import meny from "./Meny"

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
