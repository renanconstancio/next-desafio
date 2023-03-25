type SalePrice = {
  price: string;
};

export default function PriceOf({ price }: SalePrice) {
  return price ? (
    <strong className="bold text-xl block text-red-400">{price}</strong>
  ) : (
    <></>
  );
}
