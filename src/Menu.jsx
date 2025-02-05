import Dish from "./Dish";

function Menu({ menu }) {
  return (
    <>
      {menu.map((dish) => (
        <Dish
          key={dish.id}
          title={dish.tittel}
          price={dish.pris}
          ingredients={dish.ingredienser}
          category={dish.kategori}
        />
      ))}
    </>
  );
}

export default Menu;
