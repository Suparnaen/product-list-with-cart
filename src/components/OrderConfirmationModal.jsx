import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMemo } from 'react'
import { clearCart } from '../features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import orderConfirmedIcon from '../assets/images/icon-order-confirmed.svg'

const OrderConfirmationModal = ({ items,open, onClose }) => {
	const dispatch = useDispatch();
	const {cart} = useSelector(state => state.cart);
	
	
	const totalAmount = useMemo(
    () => cart.reduce((total, item) => total + item.qty * item.price, 0),
    [cart]
	);
	const startNewOrder = () => {
       dispatch(clearCart());
       onClose();
  };

  return (
    <>
     <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 grid place-items-center p-4">
				  <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
					  <img src={orderConfirmedIcon} alt="checkmark" className='w-8 h-8'/>
          <DialogTitle className="text-2xl font-extrabold">Order Confirmed</DialogTitle>
          <p className="mt-1 text-neutral-600">We hope you enjoy your desserts.</p>

          <ul className="mt-4 divide-y">
						  {items.map(it => (
				<>
				<li key={it.id} className="flex items-center justify-between py-3 gap-1">
				<img src={it.image.mobile} alt="mobile image" className='h-14 w-14 object-cover rounded-sm'/>
				<div className='flex flex-col items-start justify-start mr-12'>	
                  <p className="font-semibold">{it.name}</p>
                  <p className="text-sm text-neutral-600">{it.qty} × ${it.price.toFixed(2)}</p>
                </div>
					<span className="tabular-nums">${(it.qty * it.price).toFixed(2)}</span>
					
					
				</li>
				 <div className='flex w-full bg-rose-100 min-h-[1px] mt-2'></div>
				</>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-neutral-600">Order Total</span>
            <span className="font-extrabold tabular-nums">${totalAmount.toFixed(2)}</span>
          </div>

          <button
            className="mt-6 w-full rounded-full bg-rose-700 px-4 py-3 font-semibold text-white
                       hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-rose-600"
            onClick={startNewOrder}
          >
            Start New Order
          </button>
        </DialogPanel>
      </div>
    </Dialog>
    </>
  )
}

export default OrderConfirmationModal
