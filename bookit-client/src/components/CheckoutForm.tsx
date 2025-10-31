import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  validatePromoCode,
  clearAppliedPromo,
} from "../store/slices/promoSlice";

interface CheckoutFormProps {
  originalPrice: number;
  numberOfPeople: number;
  onSubmit: (data: any) => void;
}

const CheckoutForm = ({
  originalPrice,
  numberOfPeople,
  onSubmit,
}: CheckoutFormProps) => {
  const dispatch = useAppDispatch();
  const {
    appliedPromo,
    loading: promoLoading,
    error: promoError,
  } = useAppSelector((state) => state.promo);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const [promoCode, setPromoCode] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return;
    const orderValue = originalPrice * numberOfPeople;
    await dispatch(validatePromoCode({ code: promoCode, orderValue }));
  };

  const handleRemovePromo = () => {
    setPromoCode("");
    dispatch(clearAppliedPromo());
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const discount = appliedPromo?.discount || 0;
      const finalPrice = originalPrice * numberOfPeople - discount;

      onSubmit({
        ...formData,
        numberOfPeople,
        promoCode: appliedPromo?.code || "",
        originalPrice,
        discount,
        finalPrice,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl shadow-md border border-gray-200"
    >
      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors
            ${
              errors.userName
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          placeholder="Enter your full name"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors
            ${
              errors.email
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-colors
            ${
              errors.phone
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          placeholder="10-digit mobile number"
          maxLength={10}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Promo Code */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">
          Promo Code (Optional)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            disabled={!!appliedPromo}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors disabled:opacity-50"
            placeholder="Enter promo code"
          />
          {appliedPromo ? (
            <button
              type="button"
              onClick={handleRemovePromo}
              className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          ) : (
            <button
              type="button"
              onClick={handleApplyPromo}
              disabled={promoLoading || !promoCode}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {promoLoading ? "Checking..." : "Apply"}
            </button>
          )}
        </div>

        {appliedPromo && (
          <p className="text-green-600 text-sm mt-2">
            ✓ {appliedPromo.code} applied! You saved ₹{appliedPromo.discount}
          </p>
        )}

        {promoError && (
          <p className="text-red-500 text-sm mt-2">{promoError}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-lg text-lg transition-colors"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default CheckoutForm;
