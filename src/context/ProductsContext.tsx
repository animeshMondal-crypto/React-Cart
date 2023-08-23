import React, { useEffect, useState, createContext, useContext } from "react";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  images: string[];
};

type ProductContextType = {
  products: ProductType[];
};

export const ProductContext = createContext({} as ProductContextType);

export function useProductContext() {
  return useContext(ProductContext);
}

const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  async function getProducts() {
    const res = await fetch(
      "https://dummyjson.com/products?select=id,title,description,rating,price,images"
    );
    const data = await res.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
