import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createBooking } from "../store/slices/bookingSlice";
import CheckoutForm from "../components/CheckoutForm";
import PriceBreakdown from "../components/PriceBreakDown";
import Loader from "../components/Loader";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { bookingData, currentBooking, loading } = useAppSelector(
    (state) => state.booking
  );
  const { appliedPromo } = useAppSelector((state) => state.promo);

  useEffect(() => {
    if (!bookingData) {
      navigate("/");
    }
  }, [bookingData, navigate]);

  useEffect(() => {
    if (currentBooking) {
      navigate(`/booking/${currentBooking.bookingId}`);
    }
  }, [currentBooking, navigate]);

  const handleSubmit = async (formData: any) => {
    await dispatch(
      createBooking({
        experienceId: bookingData?.experienceId,
        slotId: bookingData?.slotId,
        userName: formData.userName,
        email: formData.email,
        phone: formData.phone,
        numberOfPeople: formData.numberOfPeople,
        promoCode: formData.promoCode,
        originalPrice: formData.originalPrice,
        discount: formData.discount,
        finalPrice: formData.finalPrice,
      })
    );
  };

  if (!bookingData) return null;
  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-2 text-gray-900">
            Complete Your Booking
          </h1>
          <p className="text-gray-600 mb-8">
            Just a few more details and you're all set!
          </p>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Your Information
                </h2>
                <CheckoutForm
                  originalPrice={bookingData.originalPrice}
                  numberOfPeople={bookingData.numberOfPeople}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>

            {/* Right - Summary */}
            <div className="lg:col-span-1 space-y-6">
              <PriceBreakdown
                originalPrice={bookingData.originalPrice}
                numberOfPeople={bookingData.numberOfPeople}
                discount={appliedPromo?.discount || 0}
                promoCode={appliedPromo?.code}
              />

              {/* Secure Booking */}
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">
                      Secure Booking
                    </h4>
                    <p className="text-sm text-gray-600">
                      Your information is protected and encrypted
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Confirmation */}
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">
                      Instant Confirmation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Receive confirmation immediately via email
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
