import meny from "./Meny";
import MyCard from "./Dish";

function App() {
  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Restaurant Menu
        </h1>
        <p className="text-xl text-gray-600">Our finest dishes just for you</p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {meny.map((obj) => (
          <MyCard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
