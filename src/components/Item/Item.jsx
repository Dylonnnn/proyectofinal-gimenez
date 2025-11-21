
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>
      <div className="text-item">
        <p className="title-item">{product.nombre}</p>
        <p className="price-item">${product.precio}</p>
        <Link to={ "/detail/"+product.id } className="button-item">INfORMACION DEL PRODUCTO</Link>
      </div>
    </li>
  )
}

export default Item