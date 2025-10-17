import React, { useState } from 'react'
import EmptyCart from './EmptyCart'
import { useSelector, useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { incrementQty, decrementQty, removeFromCart } from '../features/cartSlice';
import carbonNeutralIcon from '../assets/images/icon-carbon-neutral.svg';
import OrderConfirmationModal from './OrderConfirmationModal';


const CartSidebar = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);

	const [isOpen, setIsOpen] = useState(false);
	
	const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cart]
  );

  const items = useMemo(
    () =>
      cart.slice().sort((first, second) => second.timestamp - first.timestamp),
    [cart]
	);
	
	
	const count = useMemo(
    () => cart.reduce((acc, item) => acc + item.qty, 0),
    [cart]
  );

  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
	<>
	  <aside className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5
                      md:sticky md:top-6 md:self-start mx-auto w-full max-w-[520px] md:max-w-[560px] lg:max-w-none grid grid-rows-[auto,1fr,auto,auto] gap-0 overflow-hidden max-h-none sm:max-h-[70dvh] lg:max-h-[calc(100dvh-2rem)]">
		  <h2 className="font-extrabold text-lg">Your Cart ({count})</h2>
		   <ul className="mt-4 space-y-3 overflow-y-auto pr-1">
		  {items.map(({name, price, qty, id},index) => (
			  <li key={id} className="flex items-start justify-between gap-4">
					<div className="min-w-0 flex-1 mr-2">
						<p className="truncate font-medium">{name}</p>
						<p className="text-sm text-neutral-600">
						{qty} × ${price.toFixed(2)}
						</p>
				  </div>
				  	<div className="flex flex-endgap-2 mt-2 text-sm font-semibold">
						<button className="rounded-full border px-2 py-1" aria-label="Decrease"
						  onClick={() => dispatch(decrementQty({ id }))}>−</button>
						<span className="w-6 text-center tabular-nums mt-1">{qty}</span>
						<button className="rounded-full border px-2 py-1" aria-label="Increase"
						  onClick={() => dispatch(incrementQty({ id }))}>+</button>
						<button className="ml-2 text-neutral-500 hover:text-rose-700"
								aria-label="Remove item"
								onClick={() => dispatch(removeFromCart(id))}>x</button>
              		</div>
			  </li>
			  
		  )
		   )}
		  </ul>
		  {/* divider */}
		  {items.length >0 && <div className='flex w-full bg-rose-100 min-h-[1px] mt-6'></div>}
		  <div className="mt-4 flex items-center justify-between">
        <span className="text-neutral-600">Order Total</span>
        <span className="font-extrabold tabular-nums">${totalPrice.toFixed(2)}</span>
      </div>
		  {/* carbon neutral section */}
		  {/* <div className="mt-6 flex flex-col justify-center items-center gap-2"> */}
		  <div className="flex justify-center items-center gap-2 p-4 max-md:px-2 mt-6 w-full text-sm rounded-lg bg-rose-50 font-light tracking-wide">
			  <img src={carbonNeutralIcon} alt="carbon neutral" />
			  <h3>This is a <strong>carbon neutral</strong> delivery</h3>
			  </div>
			  {/* Confirm Order button */}
      <button
        className="mt-4 w-full rounded-full bg-rose-700 px-4 py-3 font-semibold text-white
                   hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-rose-600 disabled:opacity-50"
        disabled={!items.length}
				  // 
		onClick={() => setIsOpen(true)}
      >
        Confirm Order
      </button>
		  </aside>
		   <OrderConfirmationModal items={items} open={isOpen} onClose={() => setIsOpen(false)} />
	</>
  )
}

export default CartSidebar
