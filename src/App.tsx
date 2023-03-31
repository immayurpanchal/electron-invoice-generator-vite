import './App.scss'
import ProductList from './components/Product'
import SalesInvoice from './components/SalesInvoice/SalesInvoice'
function App() {
  return (
    <div className='App'>
      <ProductList />
      <SalesInvoice />
    </div>
  )
}

export default App
