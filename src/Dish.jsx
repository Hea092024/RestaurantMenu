const myCard = (props) => {
  return (
    <div id="card_holder">
      <h1>{props.tittel}</h1>
      <p>{props.pris}</p>
      <p>{props.kategori}</p>
      <p>{props.ingredienser}</p>
    </div>
  );
};

export default myCard;
