interface PriceBreakdownProps {
  originalPrice: number;
  numberOfPeople: number;
  discount: number;
  promoCode?: string;
}

const PriceBreakdown = ({
  originalPrice,
  numberOfPeople,
  discount,
  promoCode,
}: PriceBreakdownProps) => {
  const subtotal = originalPrice * numberOfPeople;
  const total = subtotal - discount;

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Price Summary
      </h3>

      <div className="space-y-3">
        {/* Subtotal */}
        <div className="flex justify-between text-gray-600">
          <span>
            ₹{originalPrice} × {numberOfPeople} person
            {numberOfPeople > 1 ? 's' : ''}
          </span>
          <span className="font-medium">₹{subtotal}</span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>
              Discount {promoCode && <span>({promoCode})</span>}
            </span>
            <span>- ₹{discount}</span>
          </div>
        )}

        {/* Total */}
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between items-center text-xl font-bold text-gray-900">
            <span>Total</span>
            <span className="text-blue-600">₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;
