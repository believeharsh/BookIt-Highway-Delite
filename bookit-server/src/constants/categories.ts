export const CATEGORIES = [
  'Adventure',
  'Culture', 
  'Nature',
  'Food',
  'Wellness',
  'Wildlife',
  'Beach',
  'Heritage'
] as const;

export type CategoryType = typeof CATEGORIES[number];

export const TIME_SLOTS_BY_CATEGORY = {
  Adventure: [
    { startTime: '06:00 AM', endTime: '09:00 AM' },
    { startTime: '07:00 AM', endTime: '10:00 AM' },
    { startTime: '10:00 AM', endTime: '01:00 PM' },
    { startTime: '02:00 PM', endTime: '05:00 PM' },
    { startTime: '03:00 PM', endTime: '06:00 PM' }
  ],
  Culture: [
    { startTime: '09:00 AM', endTime: '11:00 AM' },
    { startTime: '11:00 AM', endTime: '01:00 PM' },
    { startTime: '02:00 PM', endTime: '04:00 PM' },
    { startTime: '04:00 PM', endTime: '06:00 PM' },
    { startTime: '05:00 PM', endTime: '07:00 PM' }
  ],
  Nature: [
    { startTime: '07:00 AM', endTime: '11:00 AM' },
    { startTime: '08:00 AM', endTime: '12:00 PM' },
    { startTime: '12:00 PM', endTime: '04:00 PM' },
    { startTime: '01:00 PM', endTime: '05:00 PM' }
  ],
  Food: [
    { startTime: '10:00 AM', endTime: '12:00 PM' },
    { startTime: '11:00 AM', endTime: '01:00 PM' },
    { startTime: '12:00 PM', endTime: '02:00 PM' },
    { startTime: '05:00 PM', endTime: '07:00 PM' },
    { startTime: '06:00 PM', endTime: '08:00 PM' },
    { startTime: '07:00 PM', endTime: '09:00 PM' }
  ],
  Wellness: [
    { startTime: '06:00 AM', endTime: '08:00 AM' },
    { startTime: '07:00 AM', endTime: '09:00 AM' },
    { startTime: '09:00 AM', endTime: '11:00 AM' },
    { startTime: '03:00 PM', endTime: '05:00 PM' },
    { startTime: '05:00 PM', endTime: '07:00 PM' }
  ],
  Wildlife: [
    { startTime: '05:30 AM', endTime: '08:30 AM' },
    { startTime: '06:00 AM', endTime: '09:00 AM' },
    { startTime: '03:00 PM', endTime: '06:00 PM' },
    { startTime: '04:00 PM', endTime: '07:00 PM' }
  ],
  Beach: [
    { startTime: '08:00 AM', endTime: '11:00 AM' },
    { startTime: '10:00 AM', endTime: '01:00 PM' },
    { startTime: '02:00 PM', endTime: '05:00 PM' },
    { startTime: '03:00 PM', endTime: '06:00 PM' },
    { startTime: '04:00 PM', endTime: '07:00 PM' }
  ],
  Heritage: [
    { startTime: '08:00 AM', endTime: '10:00 AM' },
    { startTime: '09:00 AM', endTime: '11:00 AM' },
    { startTime: '11:00 AM', endTime: '01:00 PM' },
    { startTime: '02:00 PM', endTime: '04:00 PM' },
    { startTime: '03:00 PM', endTime: '05:00 PM' }
  ]
};