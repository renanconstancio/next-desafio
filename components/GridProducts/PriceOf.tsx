type PriceOf = {
  price: string;
};

export default function PriceOf({ price }: PriceOf) {
  return price ? <s className="text-xs font-thin">{price}</s> : <></>;
}
