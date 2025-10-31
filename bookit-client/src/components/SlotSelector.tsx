import { type Slot } from '../store/types';

interface SlotSelectorProps {
  slots: Slot[];
  selectedSlot: Slot | null;
  onSelectSlot: (slot: Slot) => void;
}

const SlotSelector = ({
  slots,
  selectedSlot,
  onSelectSlot,
}: SlotSelectorProps) => {
  // Group slots by date
  const slotsByDate = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, Slot[]>);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Select Date & Time</h3>

      {Object.entries(slotsByDate).map(([date, dateSlots]) => (
        <div key={date} className="space-y-1">
          <h4 className="font-semibold text-lg text-gray-800">
            {formatDate(date)}
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {dateSlots.map((slot) => {
              const isSelected = selectedSlot?._id === slot._id;

              return (
                <button
                  key={slot._id}
                  onClick={() => slot.isActive && onSelectSlot(slot)}
                  disabled={!slot.isActive}
                  className={`p-2 rounded-lg border-2 transition-all text-center
                    ${
                      isSelected
                        ? 'border-yellow-400 bg-blue-50'
                        : 'border-gray-200 hover:border-yellow-400'
                    }
                    ${
                      !slot.isActive
                        ? 'opacity-50 cursor-not-allowed'
                        : 'cursor-pointer'
                    }`}
                >
                  <div className="font-semibold text-gray-900">
                    {slot.startTime}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {slot.availableSpots} spots left
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlotSelector;
