import EmptyCartImage from "../assets/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
	<aside className="self-end sticky top-6 right-0 h-full w-full max-w-[360px] px-4">
      <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-200">
        <h3 className="text-xl font-extrabold mb-4">Your Cart<span className="text-muted font-semibold">(0)</span></h3>
      
        <img loading="lazy" src={EmptyCartImage} alt="empty cart" className="rounded-xs mx-auto"/>
        <p>Your added items will appear here</p>

      </div>
   </aside>
  )
}

export default EmptyCart;
