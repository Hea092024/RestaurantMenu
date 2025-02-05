import meny from "./Meny";
import MyMenu from "./Dish";  // Update import

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
          <MyMenu key={obj.id} {...obj} />  // Pass the object as props
        ))}
      </div>
    </div>
  );
}

export default App;
