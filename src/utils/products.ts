import iphone16 from "../assets/products/iphone16.png";
import iphone12 from "../assets/products/iphone12.png";
import iphone11 from "../assets/products/iphone11.png";
import airpodspro from "../assets/products/airpodspro.png";
import iphonexr from "../assets/products/iphonexr.png";
import iphone13 from "../assets/products/iphone13.png";
import iphone15 from "../assets/products/iphone15.png";
import airpodmax from "../assets/products/airpodmax.png";
import iphone16promax from "../assets/products/iphone16promax.png";
import applewatchult from "../assets/products/applewatchult.png";
import applewatch from "../assets/products/applewatch.png";
import macbookair from "../assets/products/macbookair.png";
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
    name: "Iphone 16",
    price: 299,
    image: iphone16,
    category: "accessories",
  },
  {
    id: 2,
    name: "Iphone 12",
    price: 149,
    image: iphone12,
    category: "electronics",
  },
  {
    id: 3,
    name: "Iphone 11",
    price: 599,
    image: iphone11,
    category: "electronics",
  },
  {
    id: 4,
    name: "Iphone xr",
    price: 749,
    image: iphonexr,
    category: "electronics",
  },
  {
    id: 5,
    name: "Iphone 13",
    price: 399,
    image: iphone13,
    category: "electronics",
  },
  {
    id: 6,
    name: "Iphone 15",
    price: 999,
    image: iphone15,
    category: "accessories",
  },
  {
    id: 7,
    name: "Iphone 16 pro max",
    price: 199,
    image: iphone16promax,
    category: "accessories",
  },
  {
    id: 8,
    name: "apple watch ultra",
    price: 349,
    image: applewatchult,
    category: "home",
  },
  {
    id: 9,
    name: "apple watch",
    price: 459,
    image: applewatch,
    category: "home",
  },
  {
    id: 10,
    name: "airpods pro",
    price: 129,
    image: airpodspro,
    category: "book",
  },
  {
    id: 11,
    name: "airpod max",
    price: 89,
    image: airpodmax,
    category: "clothing",
  },
  {
    id: 12,
    name: "macbook air",
    price: 49,
    image: macbookair,
    category: "book",
  }
];
