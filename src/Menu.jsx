import Dish from "./Dish";

function Menu({ menu }) {
  return (
    <>
      <h1 id="title">Restaurant Menu</h1>
      <ul id="menu">
        {menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
    </>
  );
}

export default Menu;
