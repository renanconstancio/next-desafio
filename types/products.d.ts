export type Products = {
  id: number;
  title: string;
  type: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};
