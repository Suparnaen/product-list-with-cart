import ProductGrid from './components/ProductGrid'
import OrderModal from './components/OrderConfirmationModal';
import CartSidebar from './components/CartSidebar';


const App = () => {
  return (
    <main className="min-h-screen bg-sand text-ink font-sans">
      <div className=" flex flex-col mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold mb-6">Desserts</h1>
        <div className='grid  grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-[1fr_360px]'>
          <ProductGrid />
          <CartSidebar/>
        </div>
        
      </div>
          
    </main>
  )
}

export default App
