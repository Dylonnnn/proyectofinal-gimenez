import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import "./cart.css";

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart } = useContext(CartContext);

  if( cart.length === 0 ){
    return(
      <div>
        <h2>no pusiste ningun producto en el carro por el momento,añade algo y despues vuelva a esta pestaña</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }


  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.image} width={100} alt="" />
            <p className="text-item-cart">{productCart.nombre}</p>
            <p className="text-item-cart">precio por unidad: ${productCart.precio}</p>
            <p className="text-item-cart">cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">precio parcial: ${ productCart.precio * productCart.quantity } </p>
            <button className="delete-item-cart" onClick={ () => deleteProductById(productCart.id) } >
              <BiTrash />
            </button>
          </div>
        ))
      }
      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <Link className="button-continue-cart" to="/checkout">Continuar con la compra</Link>
        <button className="button-delete-cart" onClick={deleteCart} >Vaciar carro</button>
      </div>
    </div>
  )
}

export default Cart