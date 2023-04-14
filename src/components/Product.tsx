import { useIpcApi } from '../hooks/useIpcApi'
interface Product {
  id: number
  product_name: string
}

const ProductList = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useIpcApi<Product[]>('getProducts')

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <ul>
      {products?.map((product) => {
        return <li key={product?.id}>{product.product_name}</li>
      })}
    </ul>
  )
}

export default ProductList
