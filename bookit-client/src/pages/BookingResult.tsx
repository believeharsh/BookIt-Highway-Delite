import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchBookingById } from "../store/slices/bookingSlice";
import Loader from "../components/Loader";

const BookingResult = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const dispatch = useAppDispatch();
  const { currentBooking, loading } = useAppSelector((state) => state.booking);

  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [bookingId, dispatch]);

  if (loading) return <Loader />;
  if (!currentBooking) return <div className="text-center py-20">Booking not found</div>;

  const experience = currentBooking.experienceId as any;
  const slot = currentBooking.slotId as any;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* ✅ Success Card */}
          <div className="bg-white p-12 rounded-2xl shadow-lg text-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <span className="text-5xl font-bold">✓</span>
            </div>

            <h1 className="text-4xl font-bold mb-3 text-green-600">
              Booking Confirmed!
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Your experience has been successfully booked
            </p>

            <div className="inline-block bg-gray-100 px-8 py-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Booking ID</p>
              <p className="text-2xl font-bold text-blue-600">
                {currentBooking.bookingId}
              </p>
            </div>
          </div>

          {/* ✅ Booking Details */}
          <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Booking Details
            </h2>

            <div className="space-y-6">
              {/* Experience Info */}
              <div className="flex gap-4 pb-6 border-b border-gray-200">
                <img
                  src={experience.images?.[0]}
                  alt={experience.title}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {experience.location?.city}, {experience.location?.country}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    {experience.category}
                  </span>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Date</p>
                  <p className="font-semibold text-lg text-gray-800">
                    {slot.date}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Time</p>
                  <p className="font-semibold text-lg text-gray-800">
                    {slot.startTime} - {slot.endTime}
                  </p>
                </div>
              </div>

              {/* Guest Info */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Guest Name</p>
                  <p className="font-semibold text-gray-800">
                    {currentBooking.userName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-gray-800">
                    {currentBooking.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="font-semibold text-gray-800">
                    {currentBooking.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Number of People
                  </p>
                  <p className="font-semibold text-gray-800">
                    {currentBooking.numberOfPeople}
                  </p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-between mb-2 text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    ₹{currentBooking.originalPrice * currentBooking.numberOfPeople}
                  </span>
                </div>

                {currentBooking.discount > 0 && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>
                      Discount{" "}
                      {currentBooking.promoCode && `(${currentBooking.promoCode})`}
                    </span>
                    <span>- ₹{currentBooking.discount}</span>
                  </div>
                )}

                <div className="flex justify-between text-xl font-bold pt-3 border-t border-gray-200">
                  <span>Total Paid</span>
                  <span className="text-blue-600">
                    ₹{currentBooking.finalPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Important Info */}
          <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-2xl mb-8">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-yellow-700">
              <span>ℹ️</span> Important Information
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• A confirmation email has been sent to {currentBooking.email}</li>
              <li>• Please arrive 15 minutes before your scheduled time</li>
              <li>• Bring a valid ID for verification</li>
              <li>• Free cancellation up to 24 hours before the experience</li>
            </ul>
          </div>

          {/* ✅ Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg text-center transition-colors"
            >
              Browse More Experiences
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 rounded-lg text-center transition-colors"
            >
              Print Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingResult;
