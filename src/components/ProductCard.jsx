import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { incrementQty, decrementQty, addToCart } from '../features/cartSlice';
import { AddToCartIcon, decrementQtyIcon, IncrementQtyIcon } from "../utils/images";
const ProductCard = ({id,name,category,price,image}) => {

  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log("cart", cart);
  const addedProduct = cart.find(item => item.id === id);
  //const quantity = addedProduct.qty;

  return (
	<article className="bg-white rounded-xl shadow-card border border-gray-50 overflow-hidden">
         <div className="relative">
			    <img src={image.desktop} alt={name} className="w-full h-56 object-cover mb-4 rounded-xl" />
			  {!addedProduct ? (
          <button className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:mx-auto flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-2 py-2 text-[12px] font-semibold shadow-sm hover:bg-neutral-50" onClick={() => dispatch(addToCart({ id, name, category, price, image, qty: 1, timestamp: Date.now() })
          )}>
              <img src={AddToCartIcon} alt={name} className="h-4 w-4"/>
              <span className='text-[12px] font-semibold'>Add to Cart</span>
            </button>
			  ) : (
					  <button className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex flex-row items-center gap-3 rounded-full border border-black/10 bg-red-700 px-6 py-2 text-[11px] font-semibold shadow-sm hover:bg-neutral-50">
						  <img src={decrementQtyIcon} alt={name} className="h-2 w-2" onClick={() => dispatch(decrementQty({id}))}/>
						  <span className="text-white mx-2">{addedProduct.qty}</span>
              <img src={IncrementQtyIcon} alt={name} className="h-2 w-2 ml-1" onClick={() => dispatch(incrementQty({id}))}/>
            </button>	  
			  )}
            
        </div>
        <div className="pt-4">
          <p className="text-xs font-semibold text-gray-600 mb-1">{category}</p>
          <h3 className="font-bold text-sm mb-1">{name}</h3>
          <p className="text-sm font-semibold text-red-700">${price.toFixed(2)}</p>
        </div>
       </article>
  )
}

export default ProductCard
