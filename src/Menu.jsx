import Dish from "./Dish";

function Menu({ menu }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Restaurant Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
