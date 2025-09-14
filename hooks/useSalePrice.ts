type Props = {
  originalPrice: number;
  sale?: number;
};
export const usePrice = ({ originalPrice, sale }: Props) => {
  const discount = sale && sale > 0;
  if (discount) {
    const totalPrice = originalPrice - originalPrice * (sale! / 100);
    return totalPrice;
  }
  return originalPrice;
};
