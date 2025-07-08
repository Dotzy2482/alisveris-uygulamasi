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
    image: "/assets/products/red-shoes.jpg",
    category: "Giyim",
  },
  {
    id: 2,
    name: "Mavi Tişört",
    price: 149,
    image: "/assets/products/blue-shirt.jpg",
    category: "Giyim",
  },
  {
    id: 3,
    name: "Kulaklık",
    price: 599,
    image: "/assets/products/headphones.jpg",
    category: "Elektronik",
  },
  {
    id: 4,
    name: "Siyah Mont",
    price: 749,
    image: "/assets/products/black-jacket.jpg",
    category: "Giyim",
  },
  {
    id: 5,
    name: "Bluetooth Hoparlör",
    price: 399,
    image: "/assets/products/speaker.jpg",
    category: "Elektronik",
  },
  {
    id: 6,
    name: "Akıllı Saat",
    price: 999,
    image: "/assets/products/smartwatch.jpg",
    category: "Elektronik",
  },
  {
    id: 7,
    name: "Deri Cüzdan",
    price: 199,
    image: "/assets/products/wallet.jpg",
    category: "Aksesuar",
  },
  {
    id: 8,
    name: "Sırt Çantası",
    price: 349,
    image: "/assets/products/backpack.jpg",
    category: "Aksesuar",
  },
  {
    id: 9,
    name: "Kahverengi Bot",
    price: 459,
    image: "/assets/products/brown-boots.jpg",
    category: "Giyim",
  },
  {
    id: 10,
    name: "Masa Lambası",
    price: 129,
    image: "/assets/products/lamp.jpg",
    category: "Ev",
  },
  {
    id: 11,
    name: "Kitap",
    price: 89,
    image: "/assets/products/book.jpg",
    category: "Kitap",
  },
  {
    id: 12,
    name: "Kupa Bardak",
    price: 49,
    image: "/assets/products/mug.jpg",
    category: "Ev",
  }
];
