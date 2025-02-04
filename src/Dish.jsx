import "./Card.css";

const MyCard = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 border border-gray-200">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        {props.tittel}
      </h1>

      {/* Price */}
      <p className="text-lg font-medium text-green-600">{props.pris}</p>

      {/* Ingredients */}
      <p className="text-sm text-gray-600 mt-2">{props.ingredienser}</p>

      {/* Category */}
      <p className="text-xs text-gray-500 mt-2 italic">{props.kategori}</p>
    </div>
  );
};

export default MyCard;
