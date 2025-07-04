export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Kırmızı Ayakkabı",
    price: 299,
    image: "https://via.placeholder.com/150x150?text=Ayakkabı",
    category: "giyim"
  },
  {
    id: 2,
    name: "Mavi Tişört",
    price: 149,
    image: "https://via.placeholder.com/150x150?text=Tişört",
    category: "giyim"
  },
  {
    id: 3,
    name: "Kulaklık",
    price: 599,
    image: "https://via.placeholder.com/150x150?text=Kulaklık",
    category: "elektronik"
  }
];