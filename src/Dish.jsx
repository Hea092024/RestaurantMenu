function Dish({ dish }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{dish.tittel}</h3>
      <p>
        <strong>Pris:</strong> {dish.pris}
      </p>
      <p>
        <strong>Ingredienser:</strong> {dish.ingredienser}
      </p>
      <p>
        <strong>Kategori:</strong> {dish.kategori}
      </p>
    </div>
  );
}

export default Dish;
