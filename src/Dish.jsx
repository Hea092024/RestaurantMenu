function Dish({ dish }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 max-w-xs mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800">{dish.tittel}</h3>
      <p className="text-gray-600 mt-2">
        <strong className="font-medium">Pris:</strong>
        <span className="text-pricegreen font-bold">{dish.pris}</span>
      </p>
      <p className="text-gray-600">
        <strong className="font-medium">Ingredienser:</strong>{" "}
        {dish.ingredienser}
      </p>
      <p className="text-gray-600">
        <strong className="font-medium">Kategori:</strong> {dish.kategori}
      </p>
    </div>
  );
}

export default Dish;
