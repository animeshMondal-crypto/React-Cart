import React, { useEffect, useState, createContext, useContext } from "react";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  images: string[];
  category: string;
};

type ProductContextType = {
  updateProducts: (searchQuery: string) => ProductType[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
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
  const [searchQuery, setSearchQuery] = useState("");

  async function getProducts() {
    const res = await fetch(
      "https://dummyjson.com/products?select=id,title,description,rating,price,images,category"
    );
    const data = await res.json();
    setProducts(data.products);
  }

  const updateProducts = (searchQuery: string) => {
    let transformProducts = products;
    transformProducts = transformProducts.filter((prod) =>
      prod.title.toLocaleLowerCase().includes(searchQuery)
    );
    return transformProducts;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ updateProducts, products, searchQuery, setSearchQuery }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
