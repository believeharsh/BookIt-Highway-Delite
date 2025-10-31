import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchExperienceById } from "../store/slices/experienceSlice";
import { setBookingData } from "../store/slices/bookingSlice";
import SlotSelector from "../components/SlotSelector";
import Loader from "../components/Loader";
import { type Slot } from "../store/types";

const ExperienceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedExperience, availableSlots, loading } = useAppSelector(
    (state) => state.experience
  );

  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "overview" | "included" | "highlights"
  >("overview");

  useEffect(() => {
    if (id) dispatch(fetchExperienceById(id));
  }, [id, dispatch]);

  const handleBookNow = () => {
    if (!selectedSlot) {
      alert("Please select a slot");
      return;
    }

    if (numberOfPeople > selectedSlot.availableSpots) {
      alert(`Only ${selectedSlot.availableSpots} spots available`);
      return;
    }

    dispatch(
      setBookingData({
        experienceId: selectedExperience?._id,
        slotId: selectedSlot._id,
        numberOfPeople,
        originalPrice: selectedExperience?.price || 0,
        discount: 0,
        finalPrice: (selectedExperience?.price || 0) * numberOfPeople,
      })
    );

    navigate("/checkout");
  };

  if (loading) return <Loader />;
  if (!selectedExperience) return <div>Experience not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <img
            src={selectedExperience.images[0]}
            alt={selectedExperience.title}
            className="w-full h-96 object-cover rounded-2xl"
          />
          <div className="grid grid-cols-2 gap-4">
            {selectedExperience.images.slice(1, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${selectedExperience.title} ${index + 2}`}
                className="w-full h-44 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-3">
                    {selectedExperience.category}
                  </span>
                  <h1 className="text-4xl font-bold mb-2 text-gray-900">
                    {selectedExperience.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <span>
                      📍 {selectedExperience.location.city},{" "}
                      {selectedExperience.location.country}
                    </span>
                    <span>⏱️ {selectedExperience.duration}</span>
                    <span>👥 Max {selectedExperience.maxGroupSize} people</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-500">⭐</span>
                <span className="font-bold text-xl text-gray-900">
                  {selectedExperience.rating}
                </span>
                <span className="text-gray-600">
                  ({selectedExperience.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex gap-6 border-b border-gray-200 mb-6">
                {(["overview", "highlights", "included"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-4 font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-yellow-400 text-yellow-500"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                {activeTab === "overview" && (
                  <p className="text-gray-600 leading-relaxed">
                    {selectedExperience.description}
                  </p>
                )}

                {activeTab === "highlights" && (
                  <ul className="space-y-3">
                    {selectedExperience.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "included" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-600">
                        ✓ What's Included
                      </h4>
                      <ul className="space-y-2">
                        {selectedExperience.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-red-500">
                        ✗ What's Not Included
                      </h4>
                      <ul className="space-y-2">
                        {selectedExperience.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-red-500 mt-1">✗</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Slots */}
            {availableSlots.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <SlotSelector
                  slots={availableSlots}
                  selectedSlot={selectedSlot}
                  onSelectSlot={setSelectedSlot}
                />
              </div>
            )}
          </div>

          {/* Right Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-yellow-500">
                    ₹{selectedExperience.price}
                  </span>
                  <span className="text-gray-600">/ person</span>
                </div>
                <p className="text-sm text-gray-500">
                  Free cancellation up to 24 hours before
                </p>
              </div>

              {/* Number of People */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Number of People
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setNumberOfPeople(Math.max(1, numberOfPeople - 1))
                    }
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 font-semibold transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {numberOfPeople}
                  </span>
                  <button
                    onClick={() =>
                      setNumberOfPeople(
                        Math.min(
                          selectedExperience.maxGroupSize,
                          numberOfPeople + 1
                        )
                      )
                    }
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 font-semibold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between mb-2 text-gray-700">
                  <span>
                    ₹{selectedExperience.price} × {numberOfPeople}
                  </span>
                  <span className="font-semibold">
                    ₹{selectedExperience.price * numberOfPeople}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-6 text-gray-900">
                <span>Total</span>
                <span className="text-yellow-500">
                  ₹{selectedExperience.price * numberOfPeople}
                </span>
              </div>

              <button
                onClick={handleBookNow}
                disabled={!selectedSlot}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3.5 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {selectedSlot ? "Book Now" : "Select a Slot First"}
              </button>

              {selectedSlot && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  Selected: {selectedSlot.date} at {selectedSlot.startTime}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
