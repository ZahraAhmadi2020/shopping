import dropdown from "../../assets/icons/dropdown.svg";
const BreadCrum = () => {
  const { product } = props;
  return (
    <div className="breadCrum">
      Home <img src={dropdown} />
      Shop <img src={dropdown} />
      {product.categoty}
    </div>
  );
};

export default BreadCrum;
